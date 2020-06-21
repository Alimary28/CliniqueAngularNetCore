using CliniqueAngularNetCore.Models;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ModelValidators
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(x => x.FirstName).Length(3, 10);
            RuleFor(x => x.LastName).Length(3, 10);
            RuleFor(x => x.Username)
                .NotEmpty()
                .WithMessage("Required username");
            //RuleFor(x => x.Password)
            //    .Matches(@"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])")
            //    .Length(8)
            //    .WithMessage("Password must contain at least one uppercase, one lower case, one number and one special character and length must be 8 characters");
            RuleFor(x => x.Email).EmailAddress()
                .WithMessage("Required a valid e-mail adress");
            RuleFor(x => x.Phone).InclusiveBetween(9, 10);
        }
    }
}
