﻿using Microsoft.EntityFrameworkCore;

namespace CliniqueAngularNetCore.Models
{
    public class CliniqueDbContext : DbContext
    {
        public DbSet<MedicalService> MedicalServices { get; set; }
        public DbSet<ClinicStaff> Staffs { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Appointment> Appointments { get; set; }

        public CliniqueDbContext(DbContextOptions<CliniqueDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Appointment>()
                .HasIndex(a => new { a.ClinicStaffId, a.UserId })
                .IsUnique(false);
        }
    }
}

