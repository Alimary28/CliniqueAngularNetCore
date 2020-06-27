using CliniqueAngularNetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ViewModels
{
    public class MedicalServiceDetails
    {

        public long Id { get; set; }
        public Domain Domain { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Minutes { get; set; }
        public int Price { get; set; }
        public List<ClinicStaffForServices> Staffs { get; set; } = new List<ClinicStaffForServices>();

    }
}

