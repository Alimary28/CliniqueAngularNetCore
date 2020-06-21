using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using CliniqueAngularNetCore.Helpers;
using CliniqueAngularNetCore.Models;
using CliniqueAngularNetCore.Services;
using CliniqueAngularNetCore.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace CliniqueAngularNetCore.Controllers
{

        [Authorize]
        [ApiController]
        [Route("[controller]")]
        public class UsersController : ControllerBase
        {
            private IUserService _userService;
            private IMapper _mapper;
            private readonly AppSettings _appSettings;

        public UsersController(IUserService userService, IMapper mapper, IOptions<AppSettings> appSettings)
            {
                _userService = userService;
                _mapper = mapper;
                _appSettings = appSettings.Value;
        }

            [AllowAnonymous]
            [HttpPost("authenticate")]
            public IActionResult Authenticate([FromBody]AuthenticatePostModel model)
            {
                var response = _userService.Authenticate(model.Username, model.Password);

                if (response == null)
                    return BadRequest(new { message = "Username or password is incorrect" });

            //var userToReturn = _mapper.Map<UserWithToken>(response);

            return Ok(response);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]UserRegister model)
        {
            // map model to entity
            var user = _mapper.Map<User>(model);

            try
            {
                // create user
                _userService.Register(user);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            var model = _mapper.Map<IList<UserDto>>(users);
            return Ok(model);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(long id)
        {
            var user = _userService.GetById(id);
            var model = _mapper.Map<UserDto>(user);
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody]UserUpdate model)
        {
            // map model to entity and set id
            var user = _mapper.Map<User>(model);
            user.Id = id;

            try
            {
                // update user 
                _userService.Update(user);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}