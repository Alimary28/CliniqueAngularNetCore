using CliniqueAngularNetCore.Models;

namespace CliniqueAngularNetCore.ViewModels
{
    public class ClinicStaffForServices
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Position Position { get; set; }

        public static ClinicStaffForServices FromClinicStaff(ClinicStaff staff) 
        {
            return new ClinicStaffForServices
            {
                FirstName = staff.FirstName,
                LastName = staff.LastName,
                Position = staff.Position
            };
        }
    }
}
