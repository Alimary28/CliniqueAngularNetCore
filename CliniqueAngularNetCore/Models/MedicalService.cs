using System.Collections.Generic;
using System.Runtime.Serialization;

namespace CliniqueAngularNetCore.Models
{
    public enum Domain { 

        [EnumMember(Value = "Orthopedics")]
        Orthopedics,

        [EnumMember(Value = "Cardiology")]
        Cardiology,

        [EnumMember(Value = "Physiokinetotherapy")]
        Physiokinetotherapy,

        [EnumMember(Value = "Surgery")]
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
