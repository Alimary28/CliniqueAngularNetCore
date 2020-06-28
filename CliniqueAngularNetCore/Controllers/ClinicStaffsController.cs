using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.ViewModels;

namespace CliniqueAngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicStaffsController : ControllerBase
    {
        private readonly CliniqueDbContext _context;

        public ClinicStaffsController(CliniqueDbContext context)
        {
            _context = context;
        }

        // GET: api/ClinicStaffs
        /// <summary>
        /// A filtered list of Clinic Staff view model
        /// </summary>
        /// <param name="searchText">Filter clinic staffs by firstname or lastname</param>
        /// <returns>All the clinic staffs that corespond with the searchText</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<ClinicStaffForServices>>> GetStaffs(string searchText = null)
        {
            IQueryable<ClinicStaff> staffs = _context.Staffs;

            if (searchText != null)
            {
                staffs = staffs.Where(s => s.FirstName.ToLower().Contains(searchText) ||
                                           s.LastName.ToLower().Contains(searchText));
            }
            var staffsList = await staffs.Select(s => new ClinicStaffForServices 
            {
                Id = s.Id,
                FirstName = s.FirstName,
                LastName = s.LastName,
                Position = s.Position,
                MedicalServiceId = s.MedicalServiceId
            }).ToListAsync();
            return staffsList;
        }

        // GET: api/ClinicStaffs/5
        /// <summary>
        /// Get the details of a clinic staff object
        /// </summary>
        /// <param name="id">The id of the clinic staff</param>
        /// <returns>The clinic staff object with all its properties</returns>
        /// <response code="200">Returns 200 if the request was succesfully completed</response>
        /// <response code="404">Returns Not Found if the object is null</response>
        
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ClinicStaff>> GetClinicStaff(long id)
        {
            var clinicStaff = await _context.Staffs.FindAsync(id);

            if (clinicStaff == null)
            {
                return NotFound();
            }

            return clinicStaff;
        }

        // PUT: api/ClinicStaffs/5
        /// <summary>
        /// Updates the clinic staff object
        /// </summary>
        /// <param name="id">The id of the clinic staff for update</param>
        /// <param name="clinicStaff">The object to update for</param>
        /// <returns>Return no content if the object was succesfully updated</returns>
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PutClinicStaff(long id, ClinicStaff clinicStaff)
        {
            if (id != clinicStaff.Id)
            {
                return BadRequest();
            }

            _context.Entry(clinicStaff).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClinicStaffExists(id))
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

        // DELETE: api/ClinicStaffs/5
        /// <summary>
        /// Removes the clinic staff with the given id
        /// </summary>
        /// <param name="id">The id of the object for remove</param>
        /// <returns>Return the deleted object</returns>
        
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ClinicStaff>> DeleteClinicStaff(long id)
        {
            var clinicStaff = await _context.Staffs.FindAsync(id);
            if (clinicStaff == null)
            {
                return NotFound();
            }

            _context.Staffs.Remove(clinicStaff);
            await _context.SaveChangesAsync();

            return clinicStaff;
        }

        private bool ClinicStaffExists(long id)
        {
            return _context.Staffs.Any(e => e.Id == id);
        }
    }
}
