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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClinicStaffForServices>>> GetStaffs()
        {
            IQueryable<ClinicStaff> staffs = _context.Staffs;
            var staffsList = await staffs.Select(s => new ClinicStaffForServices 
            {
                FirstName = s.FirstName,
                LastName = s.LastName,
                Position = s.Position
            }).ToListAsync();
            return staffsList;
        }

        // GET: api/ClinicStaffs/5
        [HttpGet("{id}")]
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
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
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

        // POST: api/ClinicStaffs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClinicStaff>> PostClinicStaff(ClinicStaff clinicStaff)
        {
            _context.Staffs.Add(clinicStaff);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetClinicStaff), new { id = clinicStaff.Id }, clinicStaff);
        }

        // DELETE: api/ClinicStaffs/5
        [HttpDelete("{id}")]
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
