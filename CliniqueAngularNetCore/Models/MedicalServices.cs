using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CliniqueAngularNetCore.Models
{
    public class MedicalServices
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Minutes { get; set; }
        public int Price { get; set; }

    }
}
