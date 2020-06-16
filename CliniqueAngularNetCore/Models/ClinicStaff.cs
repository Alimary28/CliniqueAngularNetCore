using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Models
{
    public class ClinicStaff
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public DateTime EmploymentDate { get; set; }
        public int Salary { get; set; }
    }
}
