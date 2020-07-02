using CliniqueAngularNetCore.Models;

namespace CliniqueAngularNetCore.ViewModels
{
    public class ClinicStaffForServices
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Position Position { get; set; }
        public long MedicalServiceId { get; set; }

        public string FullName { get; set; }
    }
}
