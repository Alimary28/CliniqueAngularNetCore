using AutoMapper;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Helpers
{
    public class AppointmentProfile : Profile
    {
        public AppointmentProfile() {
            CreateMap<Appointment, AppointmentDto>()
                .ForMember(
                dest => dest.StaffFullName,
                opt => opt.MapFrom(src => src.ClinicStaff.FullName))
                .ForMember(
                dest => dest.UserFullName,
                opt => opt.MapFrom(src => src.User.FullName));

            CreateMap<AppointmentDto, Appointment>()
                .ForMember(
                dest => dest.ClinicStaff,
                opt => opt.MapFrom(src => src.StaffFullName))
                .ForMember(
                dest => dest.User,
                opt => opt.MapFrom(src => src.UserFullName));

        }
    }
}
