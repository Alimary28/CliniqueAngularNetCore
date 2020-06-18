using CliniqueAngularNetCore.Models;
using FluentValidation;
using System;

namespace CliniqueAngularNetCore.ModelValidators
{
    public class ClinicStaffValidator : AbstractValidator<ClinicStaff>
    {
        public ClinicStaffValidator()
        {
            RuleFor(x => x.FirstName).Length(3, 10);
            RuleFor(x => x.LastName).Length(3, 10);
            RuleFor(x => x.Age).InclusiveBetween(23, 75);
            RuleFor(x => x.EmploymentDate).LessThanOrEqualTo(DateTime.Now);
            RuleFor(x => x.Salary).InclusiveBetween(3500, 15000);
        }
    }
}
