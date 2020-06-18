using Microsoft.EntityFrameworkCore.Migrations;

namespace CliniqueAngularNetCore.Migrations
{
    public partial class AddUserAndLinksWithOtherEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServicesId",
                table: "Staffs");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Staffs");

            migrationBuilder.AlterColumn<long>(
                name: "MedicalServicesId",
                table: "Staffs",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Staffs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Staffs",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<long>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true),
                    ClinicStaffId = table.Column<long>(nullable: true),
                    MedicalServicesId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Staffs_ClinicStaffId",
                        column: x => x.ClinicStaffId,
                        principalTable: "Staffs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_MedicalServices_MedicalServicesId",
                        column: x => x.MedicalServicesId,
                        principalTable: "MedicalServices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_ClinicStaffId",
                table: "Users",
                column: "ClinicStaffId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_MedicalServicesId",
                table: "Users",
                column: "MedicalServicesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServicesId",
                table: "Staffs",
                column: "MedicalServicesId",
                principalTable: "MedicalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServicesId",
                table: "Staffs");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Staffs");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Staffs");

            migrationBuilder.AlterColumn<long>(
                name: "MedicalServicesId",
                table: "Staffs",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Staffs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Staffs_MedicalServices_MedicalServicesId",
                table: "Staffs",
                column: "MedicalServicesId",
                principalTable: "MedicalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
