using CliniqueAngularNetCore.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ModelValidators
{
    public class MedicalServicesValidator : AbstractValidator<MedicalService>
    {
        public MedicalServicesValidator()
        {
            RuleFor(x => x.Domain)
                .NotEmpty();
            RuleFor(x => x.Description)
                .Length(5, 350);
            RuleFor(x => x.Minutes)
                .InclusiveBetween(10, 120);
            RuleFor(x => x.Price)
                .InclusiveBetween(50, 1500);
        }
    }
}
