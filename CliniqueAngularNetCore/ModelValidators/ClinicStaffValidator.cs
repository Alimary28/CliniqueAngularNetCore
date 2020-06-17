using CliniqueAngularNetCore.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ModelValidators
{
    public class ClinicStaffValidator : AbstractValidator<ClinicStaff>
    {
        public ClinicStaffValidator()
        {
            RuleFor(x => x.Name).Length(6, 30);
            RuleFor(x => x.Age).InclusiveBetween(23, 75);
            RuleFor(x => x.EmploymentDate).LessThanOrEqualTo(DateTime.Now);
            RuleFor(x => x.Salary).InclusiveBetween(3500, 150000);
        }
    }
}
