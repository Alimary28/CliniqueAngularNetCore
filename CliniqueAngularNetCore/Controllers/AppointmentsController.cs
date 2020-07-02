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
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace CliniqueAngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly CliniqueDbContext _context;
        private readonly IMapper _mapper;

        public AppointmentsController(CliniqueDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Appointments
        [Authorize]
        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<AppointmentDto>>> GetAppointments(long userId)
        {

            //var userAppointments = await _context.Appointments.Where(u => u.User.Id == userId).ToListAsync();
            var userAppointments = await _context.Appointments
                                    .Include(a => a.ClinicStaff)
                                    .Include(a => a.User)
                                    .Where(a => a.User.Id == userId).ToListAsync();
            var appointmentsToReturn = _mapper.Map<IEnumerable<AppointmentDto>>(userAppointments);


            return Ok(appointmentsToReturn);
        }

        // POST: api/Appointments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<AppointmentDto>> PostAppointment(AppointmentDto appointment)
        {
            var staffId = appointment.StaffId;
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var newAppointment = await _context.Appointments
                                    .FirstOrDefaultAsync(app => app.AppointmentTime == appointment.AppointmentTime && app.ClinicStaff.Id == staffId
                                                    || app.UserId == userId && app.AppointmentTime == appointment.AppointmentTime);

            if (newAppointment != null) {
                return BadRequest("An appointment already exists!");
            }
            newAppointment = new Appointment
            {
                UserId = userId,
                ClinicStaffId = staffId,
                Reason = appointment.Reason,
                AppointmentTime = appointment.AppointmentTime
            };
            await _context.Appointments.AddAsync(newAppointment);

            if (await _context.SaveChangesAsync() > 0) {
                return Ok();
            }

            return BadRequest("Failed to make an appointment");

        }

        //private bool AppointmentExists(long id)
        //{
        //    return _context.Appointments.Any(e => e.Id == id);
        //}
    }
}
