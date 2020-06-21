using Microsoft.EntityFrameworkCore.Migrations;

namespace CliniqueAngularNetCore.Migrations
{
    public partial class AddAppointmentAndLinksWithUserAndClinicStaff : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_MedicalServices_MedicalServicesId",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServicesId",
                table: "Staffs");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_Staffs_ClinicStaffId",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_MedicalServices_MedicalServicesId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_ClinicStaffId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_MedicalServicesId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Staffs_MedicalServicesId",
                table: "Staffs");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_MedicalServicesId",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "ClinicStaffId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MedicalServicesId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MedicalServicesId",
                table: "Appointments");

            migrationBuilder.AddColumn<long>(
                name: "MedicalServiceId",
                table: "Staffs",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "ClinicStaffId",
                table: "Appointments",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Staffs_MedicalServiceId",
                table: "Staffs",
                column: "MedicalServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_ClinicStaffId_UserId",
                table: "Appointments",
                columns: new[] { "ClinicStaffId", "UserId" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_Staffs_ClinicStaffId",
                table: "Appointments",
                column: "ClinicStaffId",
                principalTable: "Staffs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServiceId",
                table: "Staffs",
                column: "MedicalServiceId",
                principalTable: "MedicalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_Staffs_ClinicStaffId",
                table: "Appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServiceId",
                table: "Staffs");

            migrationBuilder.DropIndex(
                name: "IX_Staffs_MedicalServiceId",
                table: "Staffs");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_ClinicStaffId_UserId",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "MedicalServiceId",
                table: "Staffs");

            migrationBuilder.DropColumn(
                name: "ClinicStaffId",
                table: "Appointments");

            migrationBuilder.AddColumn<long>(
                name: "ClinicStaffId",
                table: "Users",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "MedicalServicesId",
                table: "Users",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "MedicalServicesId",
                table: "Appointments",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ClinicStaffId",
                table: "Users",
                column: "ClinicStaffId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_MedicalServicesId",
                table: "Users",
                column: "MedicalServicesId");

            migrationBuilder.CreateIndex(
                name: "IX_Staffs_MedicalServicesId",
                table: "Staffs",
                column: "MedicalServicesId");

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_MedicalServicesId",
                table: "Appointments",
                column: "MedicalServicesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_MedicalServices_MedicalServicesId",
                table: "Appointments",
                column: "MedicalServicesId",
                principalTable: "MedicalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServicesId",
                table: "Staffs",
                column: "MedicalServicesId",
                principalTable: "MedicalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Staffs_ClinicStaffId",
                table: "Users",
                column: "ClinicStaffId",
                principalTable: "Staffs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_MedicalServices_MedicalServicesId",
                table: "Users",
                column: "MedicalServicesId",
                principalTable: "MedicalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
