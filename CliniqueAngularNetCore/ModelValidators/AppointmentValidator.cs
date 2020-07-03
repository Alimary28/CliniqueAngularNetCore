using CliniqueAngularNetCore.ViewModels;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ModelValidators
{
    public class AppointmentValidator : AbstractValidator<AppointmentDto>
    {
        public AppointmentValidator() {

            RuleFor(x => x.AppointmentTime).GreaterThanOrEqualTo(DateTime.Now);
        }
    }
}
