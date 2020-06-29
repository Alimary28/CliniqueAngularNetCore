using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.ViewModels;
using AutoMapper;

namespace CliniqueAngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalServicesController : ControllerBase
    {
        private readonly CliniqueDbContext _context;
        private readonly IMapper _mapper;
        public MedicalServicesController(CliniqueDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        /// <summary>
        /// Gets a list of the medical services
        /// </summary>
        /// <param name="searchText">Filter services by description or type</param>
        /// <returns>A list of medical services</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        
        //GET: api/MedicalServices
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<MedicalServiceDto>>> GetMedicalServices(string searchText=null)
        {
            var result = _context.MedicalServices as IQueryable<MedicalService>;

            if (searchText != null)
            {
                result = result.Where(s => s.Name.ToLower().Contains(searchText) || 
                                           s.Description.ToLower().Contains(searchText));
            }
            var medicalServices = await result.Select(s => new MedicalServiceDto
            {
                Id = s.Id,
                Domain = s.Domain,
                Name = s.Name,
                Description = s.Description
            }).ToListAsync();

            var groupedDomainList = medicalServices
                .GroupBy(m => m.Domain)
                .Select(grp => grp.ToList())
                .ToList();

            return Ok(groupedDomainList);
        }
        // GET: api/MedicalServices/5
        /// <summary>
        /// Gets the details of a medical service
        /// </summary>
        /// <param name="id">Search a medical service by the given id</param>
        /// <returns>The medical service if it exists.</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        /// <response code="404">Returns Not Found if the object is null</response>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<MedicalServiceDetails>> GetMedicalServices(long id)
        {
            var medicalServices = await _context
                    .MedicalServices
                    .Include(ms => ms.Staffs)
                    .FirstOrDefaultAsync(ms => ms.Id == id);
                    
            if (medicalServices == null)
            {
                return NotFound();
            }
            var medicalServiceToReturn = _mapper.Map<MedicalServiceDetails>(medicalServices);
           

            return medicalServiceToReturn;
           
        }

        // PUT: api/MedicalServices/5
        /// <summary>
        /// Updates a MedicalService object based on its id
        /// </summary>
        /// <param name="id">Search the service with the given id</param>
        /// <param name="medicalServices">The medical service object containing all its properties</param>
        /// <returns>A response code</returns>
        /// <response code="204">Returns NoContent if the object was succesfully updated</response>
        /// <response code="400">Returns a Bad Request if the id doesn't match the MedicalService id</response>
        /// <response code="404">Returns NotFound if the MedicalService id doesn't exist</response>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PutMedicalServices(long id, MedicalService medicalServices)
        {
            if (id != medicalServices.Id)
            {
                return BadRequest();
            }

            _context.Entry(medicalServices).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicalServicesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MedicalServices
        /// <summary>
        /// Adds a new MedicalService object in the list 
        /// </summary>
        /// <param name="medicalServices">The MedicalService object with all its properties</param>
        /// <returns>The added MedicalServices object</returns>
        /// <response code="201">Returns the newly created item</response>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<MedicalService>> PostMedicalServices(MedicalService medicalServices)
        {
            _context.MedicalServices.Add(medicalServices);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMedicalServices), new { id = medicalServices.Id }, medicalServices);
        }

        //Post: api/MedicalServices/5/ClinicStaffs
        /// <summary>
        /// Adds a clinic staff to a medical service
        /// </summary>
        /// <param name="id">The id of the medical service</param>
        /// <param name="staff">The Clinic staff object with all its properties</param>
        /// <returns>The created Clinis staff object</returns>
        /// <response code="201">Returns the success code for the created item</response>
        [HttpPost("{id}/ClinicStaffs")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<ClinicStaff>> PostClinicStaff(long id, ClinicStaff staff) {
            var medicalService = await _context.MedicalServices.FindAsync(id);
            staff.MedicalServiceId = medicalService.Id;
            _context.Staffs.Add(staff);
            await _context.SaveChangesAsync();
            medicalService.Staffs.Add(staff);
            await _context.SaveChangesAsync();
            return Ok();

        }

        // DELETE: api/MedicalServices/5
        /// <summary>
        /// Removes a medical service from the list based on the given id
        /// </summary>
        /// <param name="id">Search for the medical service with the given id</param>
        /// <returns>The removed MedicalServices object</returns>
        /// <response code="404">Returns NotFound if the id doesn't exist</response>
        /// <response code="200">Returns 200 and the removed item</response>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<MedicalService>> DeleteMedicalServices(long id)
        {
            var medicalServices = await _context.MedicalServices.FindAsync(id);
            if (medicalServices == null)
            {
                return NotFound();
            }

            _context.MedicalServices.Remove(medicalServices);
            await _context.SaveChangesAsync();

            return medicalServices;
        }

        private bool MedicalServicesExists(long id)
        {
            return _context.MedicalServices.Any(e => e.Id == id);
        }
    }
}
