using AutoMapper;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Helpers
{
    public class StaffProfile : Profile
    {
        public StaffProfile()
        {
            CreateMap<ClinicStaff, ClinicStaffForServices>();
            CreateMap<ClinicStaffForServices, ClinicStaff>();
        }
    }
}
