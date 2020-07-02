using System;
using System.ComponentModel.DataAnnotations;

namespace CliniqueAngularNetCore.Models
{
    public enum Position { 
        Doctor,
        Nurse,
        Therapist,
        Physician,
        Receptionist,
        Manager,
        Surgeon
    }
    public class ClinicStaff
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public Position Position { get; set; }
        public DateTime EmploymentDate { get; set; }
        public int Salary { get; set; }
        public MedicalService MedicalService { get; set; }
        public long MedicalServiceId { get; set; }

        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }


    }
}


