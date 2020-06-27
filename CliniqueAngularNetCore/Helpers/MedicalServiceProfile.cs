using AutoMapper;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Helpers
{
    public class MedicalServiceProfile : Profile
    {
        public MedicalServiceProfile() {
            CreateMap<MedicalService, MedicalServiceDetails>();
            CreateMap<MedicalServiceDetails, MedicalService>();
        }
    }
}
