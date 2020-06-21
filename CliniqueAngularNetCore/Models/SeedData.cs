using CliniqueAngularNetCore.Helpers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace CliniqueAngularNetCore.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new CliniqueDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<CliniqueDbContext>>()))
            {
                if (!context.Users.Any())
                {
                    context.Users.Add(new User
                    {
                        FirstName = "First",
                        LastName = "Last",
                        Username = "FirstUser",
                        Email = "first@gmail.com",
                        Phone = 0264231341,
                        Password = HashUtils.GetHashString("parolasigura")
                    });
                    context.SaveChanges();
                }

                // Look for any movies.
                if (context.MedicalServices.Any())
                {
                    return;   // DB table has been seeded
                }

                context.MedicalServices.AddRange(
                    new MedicalService
                    {
                       Domain = Domain.Orthopedics,
                       Type  = "Treatment",
                       Description = "Treatment of osteoarthritis",
                       Minutes = 30,
                       Price = 150
                    },

                     new MedicalService
                     {
                         Domain = Domain.Orthopedics,
                         Type = "Treatment",
                         Description = "Treatment of ligament injuries",
                         Minutes = 80,
                         Price = 465
                     },

                     new MedicalService
                     {
                         Domain=Domain.Cardiology,
                         Type = "Consultation",
                         Description = "The electrocardiogram is performed when there is suspected a cardiovascular disease",
                         Minutes = 45,
                         Price = 380
                     },
                     new MedicalService
                     {
                         Domain = Domain.Physiokinetotherapy,
                         Type = "Consultation",
                         Description = "Therapeutic massage for the amelioration of a large number of diseases",
                         Minutes = 50,
                         Price = 180
                     }
                );
                context.SaveChanges();
            }
        }
    }
}
