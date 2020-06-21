using AutoMapper;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.ViewModels;

namespace CliniqueAngularNetCore.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserRegister, User>();
            CreateMap<UserUpdate, User>();
            CreateMap<User, UserWithToken>();
        }
    }
}
