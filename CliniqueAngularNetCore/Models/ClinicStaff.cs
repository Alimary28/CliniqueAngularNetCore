using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Models
{
    public enum Position { 
        Doctor,
        Nurse,
        Therapist,
        Physician,
        Receptionist,
        Manager
    }
    public class ClinicStaff
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public Position Position { get; set; }
        public DateTime EmploymentDate { get; set; }
        public int Salary { get; set; }
    }
}
