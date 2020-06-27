using System;

namespace CliniqueAngularNetCore.Models
{
    public class Appointment
    {
        public long Id { get; set; }
        public DateTime AppointmentTime { get; set; }
        public string Reason { get; set; }
        public long ClinicStaffId { get; set; }
        public ClinicStaff ClinicStaff { get; set; }
        public long UserId { get; set; }
        public User User { get; set; }

    }
}
