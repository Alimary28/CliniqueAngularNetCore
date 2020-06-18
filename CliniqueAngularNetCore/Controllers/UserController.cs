using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CliniqueAngularNetCore.Services;
using CliniqueAngularNetCore.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CliniqueAngularNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [Authorize]
        [ApiController]
        [Route("[controller]")]
        public class UsersController : ControllerBase
        {
            private IUserService _userService;

            public UsersController(IUserService userService)
            {
                _userService = userService;
            }

            [AllowAnonymous]
            [HttpPost("authenticate")]
            public IActionResult Authenticate([FromBody]AuthenticatePostModel model)
            {
                var response = _userService.Authenticate(model.Username, model.Password);

                if (response == null)
                    return BadRequest(new { message = "Username or password is incorrect" });

                return Ok(response);
            }

            [HttpGet]
            public IActionResult GetAll()
            {
                var users = _userService.GetAll();
                return Ok(users);
            }

            //[AllowAnonymous]
            //[HttpPost]
            //public async Task<IActionResult> PostUser(UserForCreation user)
            //{
            //    if (await _userService.UsernameExists(user.Username))
            //    {
            //        return BadRequest("Username already taken");
            //    }

            //    var userToReturn = await _userService.CreateUser(user);
            //    if (userToReturn == null)
            //    {
            //        return BadRequest("Some error occured");
            //    }
            //    return Ok(userToReturn);
            //}

            private long GetUserId()
            {
                var idClaim = User.Claims.FirstOrDefault(x => x.Type.Equals("id")).Value;
                return long.Parse(idClaim);
            }
        }
    }
}