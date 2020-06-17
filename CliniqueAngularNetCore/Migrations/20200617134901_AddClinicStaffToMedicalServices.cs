using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CliniqueAngularNetCore.Migrations
{
    public partial class AddClinicStaffToMedicalServices : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Staffs",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    Position = table.Column<int>(nullable: false),
                    EmploymentDate = table.Column<DateTime>(nullable: false),
                    Salary = table.Column<int>(nullable: false),
                    MedicalServicesId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Staffs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Staffs_MedicalServices_MedicalServicesId",
                        column: x => x.MedicalServicesId,
                        principalTable: "MedicalServices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Staffs_MedicalServicesId",
                table: "Staffs",
                column: "MedicalServicesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Staffs");
        }
    }
}
