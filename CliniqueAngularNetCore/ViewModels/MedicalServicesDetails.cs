using CliniqueAngularNetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ViewModels
{
    public class MedicalServicesDetails
    {
        public long Id { get; set; }
        public Domain Domain { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public int Minutes { get; set; }
        public int Price { get; set; }
        public List<ClinicStaffForServices> Staffs { get; set; }

        public static MedicalServicesDetails FromMedicalServices(MedicalServices services)
        {
            return new MedicalServicesDetails
            {
                Id = services.Id,
                Domain = services.Domain,
                Type = services.Type,
                Description = services.Description,
                Minutes = services.Minutes,
                Price = services.Price,
                Staffs = services.Staffs.Select(s => ClinicStaffForServices.FromClinicStaff(s)).ToList()
            };
        }
    }
}
