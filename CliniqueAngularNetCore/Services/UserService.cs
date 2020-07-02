using CliniqueAngularNetCore.Helpers;
using CliniqueAngularNetCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace CliniqueAngularNetCore.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(long id);
        User Register(User user);
        void Update(User user);
        void Delete(long id);
        bool UsernameExists(string username);
    }

    public class UserService : IUserService

    {

        private CliniqueDbContext _dbContext;
        private readonly AppSettings _appSettings;

        public UserService(IOptions<AppSettings> appSettings, CliniqueDbContext dbContext)
        {
            _appSettings = appSettings.Value;
            _dbContext = dbContext;
        }

        public User Authenticate(string username, string password)
        {
            var user = _dbContext.Users.SingleOrDefault(x => x.Username == username && x.Password == HashUtils.GetHashString(password));

            // return null if user not found
            if (user == null) return null;

            // authentication successful so generate jwt token

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim(ClaimTypes.Role, user.UserRole)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return user;
        }
        public User GetById(long id)
        {
            return _dbContext.Users.Find(id);
        }

        public User Register (User user)
        {
            if (_dbContext.Users.Any(x => x.Username == user.Username))
                throw new AppException("Username \"" + user.Username + "\" is already taken");
            user.Password = HashUtils.GetHashString(user.Password);
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();

            return user;
        }

        public void Update(User userParam)
        {
            var user = _dbContext.Users.Find(userParam.Id);

            if (user == null)
                throw new AppException("User not found");

            if (_dbContext.Users.Any(x => x.Username == userParam.Username))
                throw new AppException("Username " + userParam.Username + " is already taken");

            user.Username = userParam.Username;
            user.FirstName = userParam.FirstName;
            user.LastName = userParam.LastName;
            user.Email = userParam.Email;

            _dbContext.Users.Update(user);
            _dbContext.SaveChanges();
        }

        public IEnumerable<User> GetAll()
        {
            return _dbContext.Users.ToList();
        }

        public void Delete(long id)
        {
            var user = _dbContext.Users.Find(id);
            if (user != null)
            {
                _dbContext.Users.Remove(user);
                _dbContext.SaveChanges();
            }
        }

        public bool UsernameExists(string username)
        {
            return _dbContext.Users.FirstOrDefault(u => u.Username == username) != null;
        }
    }
}
