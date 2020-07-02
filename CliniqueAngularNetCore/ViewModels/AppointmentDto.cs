using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ViewModels
{
    public class AppointmentDto
    {
        public long Id { get; set; }
        public DateTime AppointmentTime { get; set; }
        public string Reason { get; set; }
        public long StaffId { get; set; }
        public string StaffFullName { get; set; }
        public long UserId { get; set; }
        public string UserFullName { get; set; }
    }
}

