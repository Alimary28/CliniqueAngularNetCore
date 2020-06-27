using System.Collections.Generic;

namespace CliniqueAngularNetCore.Models
{
    public enum Domain { 
        Orthopedics,
        Cardiology,
        Physiokinetotherapy,
        Surgery

    }
    public class MedicalService
    {
        public long Id { get; set; }
        public Domain Domain { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Minutes { get; set; }
        public int Price { get; set; }
        public List<ClinicStaff> Staffs { get; set; }
        
    }
}
