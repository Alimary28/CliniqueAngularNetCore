using Microsoft.EntityFrameworkCore;

namespace CliniqueAngularNetCore.Models
{
    public class CliniqueDbContext : DbContext
    {
        public CliniqueDbContext(DbContextOptions<CliniqueDbContext> options)
            : base(options)
        { 
        }
        public DbSet<MedicalServices> MedicalServices { get; set; }
        public DbSet<ClinicStaff> Staffs { get; set; }
    }
}
