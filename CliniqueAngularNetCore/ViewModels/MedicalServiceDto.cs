﻿using CliniqueAngularNetCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.ViewModels
{
    public class MedicalServiceDto
    {
        public long Id { get; set; }
        public Domain Domain  { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

