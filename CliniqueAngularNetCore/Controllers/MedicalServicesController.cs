using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CliniqueAngularNetCore.Models;

namespace CliniqueAngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalServicesController : ControllerBase
    {
        private readonly CliniqueDbContext _context;

        public MedicalServicesController(CliniqueDbContext context)
        {
            _context = context;
        }

        // GET: api/MedicalServices
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<MedicalServices>>> GetMedicalServices()
        //{
        //    return await _context.MedicalServices.ToListAsync();
        //}

        //GET: api/MedicalServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicalServices>>> GetMedicalServices(string searchString=null)
        {
            var result = _context.MedicalServices as IQueryable<MedicalServices>;

            if (!String.IsNullOrEmpty(searchString))
            {
                result = result.Where(s => s.Type.ToLower().Contains(searchString) || 
                                           s.Description.ToLower().Contains(searchString));
            }
            var medicalServices = await result.OrderByDescending(s => s.Price).ToListAsync();

            return Ok(medicalServices);
        }
        // GET: api/MedicalServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalServices>> GetMedicalServices(long id)
        {
            var medicalServices = await _context.MedicalServices.FindAsync(id);

            if (medicalServices == null)
            {
                return NotFound();
            }

            return medicalServices;
        }

        // PUT: api/MedicalServices/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicalServices(long id, MedicalServices medicalServices)
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
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MedicalServices>> PostMedicalServices(MedicalServices medicalServices)
        {
            _context.MedicalServices.Add(medicalServices);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedicalServices", new { id = medicalServices.Id }, medicalServices);
        }

        // DELETE: api/MedicalServices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MedicalServices>> DeleteMedicalServices(long id)
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
