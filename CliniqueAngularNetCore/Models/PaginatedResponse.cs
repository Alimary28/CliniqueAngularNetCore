﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Models
{
    public class PaginatedResponse<T>
    {
        public PaginatedResponse(IEnumerable<T> data, int index, int len ){
            Data = data.Skip((index - 1) * len).Take(len).ToList();
            Total = data.Count();
        }
        public int Total { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}
