import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createDoctors = await prisma.doctors.createMany({
    data: [
      {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone_number: "1234567890",
        address: "123 Main St",
        specialization: "Cardiology",
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone_number: "0987654321",
        address: "456 Elm St",
        specialization: "Neurology",
      },
      {
        first_name: "Emily",
        last_name: "Johnson",
        email: "emily.johnson@example.com",
        phone_number: "2345678901",
        address: "789 Oak St",
        specialization: "Orthopedics",
      },
      {
        first_name: "Michael",
        last_name: "Brown",
        email: "michael.brown@example.com",
        phone_number: "3456789012",
        address: "321 Pine St",
        specialization: "Pediatrics",
      },
      {
        first_name: "Sarah",
        last_name: "Davis",
        email: "sarah.davis@example.com",
        phone_number: "4567890123",
        address: "654 Cedar St",
        specialization: "Dermatology",
      },
      {
        first_name: "David",
        last_name: "Martinez",
        email: "david.martinez@example.com",
        phone_number: "5678901234",
        address: "987 Spruce St",
        specialization: "Oncology",
      },
      {
        first_name: "Laura",
        last_name: "Garcia",
        email: "laura.garcia@example.com",
        phone_number: "6789012345",
        address: "123 Willow St",
        specialization: "Psychiatry",
      },
      {
        first_name: "James",
        last_name: "Wilson",
        email: "james.wilson@example.com",
        phone_number: "7890123456",
        address: "456 Birch St",
        specialization: "Cardiology",
      },
      {
        first_name: "Emma",
        last_name: "Lopez",
        email: "emma.lopez@example.com",
        phone_number: "8901234567",
        address: "789 Maple St",
        specialization: "Neurology",
      },
      {
        first_name: "Daniel",
        last_name: "Gonzalez",
        email: "daniel.gonzalez@example.com",
        phone_number: "9012345678",
        address: "321 Aspen St",
        specialization: "Orthopedics",
      },
    ],
  });
  console.log(createDoctors);

  const createPatients = await prisma.patients.createMany({
    data: [
      {
        first_name: "Sameer",
        last_name: "Khan",
        email: "sameer.khan@example.com",
        phone_number: "1012345678",
        address: "123 Peach St",
        date_of_birth: new Date("2000-01-15"),
        gender: "mail",
      },
      {
        first_name: "Zoya",
        last_name: "Malik",
        email: "zoya.malik@example.com",
        phone_number: "1123456789",
        address: "456 Plum St",
        date_of_birth: new Date("1999-05-23"),
        gender: "femail",
      },
      {
        first_name: "Nabil",
        last_name: "Ahmed",
        email: "nabil.ahmed@example.com",
        phone_number: "1234567890",
        address: "789 Cherry St",
        date_of_birth: new Date("2001-09-10"),
        gender: "mail",
      },
      {
        first_name: "Rafi",
        last_name: "Hussain",
        email: "rafi.hussain@example.com",
        phone_number: "1345678901",
        address: "321 Grape St",
        date_of_birth: new Date("1998-12-01"),
        gender: "mail",
      },
      {
        first_name: "Sophia",
        last_name: "Rahman",
        email: "sophia.rahman@example.com",
        phone_number: "1456789012",
        address: "654 Orange St",
        date_of_birth: new Date("2000-07-18"),
        gender: "femail",
      },
      {
        first_name: "Hasan",
        last_name: "Ali",
        email: "hasan.ali@example.com",
        phone_number: "1567890123",
        address: "987 Banana St",
        date_of_birth: new Date("1997-04-05"),
        gender: "mail",
      },
      {
        first_name: "Aisha",
        last_name: "Begum",
        email: "aisha.begum@example.com",
        phone_number: "1678901234",
        address: "123 Mango St",
        date_of_birth: new Date("1996-03-25"),
        gender: "femail",
      },
      {
        first_name: "Tariq",
        last_name: "Siddiqui",
        email: "tariq.siddiqui@example.com",
        phone_number: "1789012345",
        address: "456 Apple St",
        date_of_birth: new Date("1995-08-14"),
        gender: "mail",
      },
      {
        first_name: "Mariam",
        last_name: "Iqbal",
        email: "mariam.iqbal@example.com",
        phone_number: "1890123456",
        address: "789 Pineapple St",
        date_of_birth: new Date("2002-02-11"),
        gender: "femail",
      },
      {
        first_name: "Zain",
        last_name: "Patel",
        email: "zain.patel@example.com",
        phone_number: "1901234567",
        address: "321 Coconut St",
        date_of_birth: new Date("1998-11-22"),
        gender: "mail",
      },
    ],
  });
  console.log(createPatients);

  const createAppointments = await prisma.appointments.createMany({
    data: [
      {
        doctor_id: 1,
        patient_id: 1,
        appointment_date: new Date("2024-10-01"),
        status: "scheduled",
      },
      {
        doctor_id: 2,
        patient_id: 2,
        appointment_date: new Date("2024-10-05"),
        status: "scheduled",
      },
      {
        doctor_id: 3,
        patient_id: 3,
        appointment_date: new Date("2024-10-10"),
        status: "scheduled",
      },
      {
        doctor_id: 4,
        patient_id: 4,
        appointment_date: new Date("2024-10-15"),
        status: "scheduled",
      },
      {
        doctor_id: 5,
        patient_id: 5,
        appointment_date: new Date("2024-10-18"),
        status: "scheduled",
      },
      {
        doctor_id: 6,
        patient_id: 6,
        appointment_date: new Date("2024-10-20"),
        status: "scheduled",
      },
      {
        doctor_id: 7,
        patient_id: 7,
        appointment_date: new Date("2024-10-22"),
        status: "scheduled",
      },
      {
        doctor_id: 8,
        patient_id: 8,
        appointment_date: new Date("2024-10-25"),
        status: "scheduled",
      },
      {
        doctor_id: 9,
        patient_id: 9,
        appointment_date: new Date("2024-10-28"),
        status: "scheduled",
      },
      {
        doctor_id: 10,
        patient_id: 10,
        appointment_date: new Date("2024-10-30"),
        status: "scheduled",
      },
    ],
  });
  console.log(createAppointments);

  const createPrescription = await prisma.prescriptions.createMany({
    data: [
      {
        appointment_id: 1,
        medication: "Paracetamol",
        dosage: "500mg",
        instructions: "Twice daily",
      },
      { appointment_id: 2, medication: "Ibuprofen", dosage: "200mg", instructions: "After meals" },
      {
        appointment_id: 3,
        medication: "Amoxicillin",
        dosage: "250mg",
        instructions: "Thrice daily",
      },
      { appointment_id: 4, medication: "Cetirizine", dosage: "10mg" },
      { appointment_id: 5, medication: "Metformin", dosage: "500mg" },
      { appointment_id: 6, medication: "Atorvastatin", dosage: "10mg" },
      { appointment_id: 7, medication: "Omeprazole", dosage: "20mg" },
      { appointment_id: 8, medication: "Aspirin", dosage: "75mg" },
      { appointment_id: 9, medication: "Albuterol", dosage: "100mcg", instructions: "As needed" },
      { appointment_id: 10, medication: "Losartan", dosage: "50mg" },
    ],
  });
  console.log(createPrescription);

  const createMedicalRecord = await prisma.medical_records.createMany({
    data: [
      {
        patient_id: 1,
        diagnosis: "Hypertension",
        treatment: "Lifestyle changes",
        record_date: "2024-10-01",
      },
      {
        patient_id: 2,
        diagnosis: "Diabetes",
        treatment: "Insulin therapy",
        record_date: "2024-10-05",
      },
      { patient_id: 3, diagnosis: "Asthma", treatment: "Inhaler", record_date: "2024-10-10" },
      {
        patient_id: 4,
        diagnosis: "Allergies",
        treatment: "Antihistamines",
        record_date: "2024-10-15",
      },
      { patient_id: 5, diagnosis: "Migraine", treatment: "Painkillers", record_date: "2024-10-18" },
      {
        patient_id: 6,
        diagnosis: "Arthritis",
        treatment: "Physical therapy",
        record_date: "2024-10-20",
      },
      {
        patient_id: 7,
        diagnosis: "Depression",
        treatment: "Counseling",
        record_date: "2024-10-22",
      },
      {
        patient_id: 8,
        diagnosis: "GERD",
        treatment: "Proton-pump inhibitors",
        record_date: "2024-10-25",
      },
      { patient_id: 9, diagnosis: "Obesity", treatment: "Diet control", record_date: "2024-10-28" },
      {
        patient_id: 10,
        diagnosis: "Heart disease",
        treatment: "Medication",
        record_date: "2024-10-30",
      },
    ],
  });
  console.log(createMedicalRecord);

  const createDepartment = await prisma.departments.createMany({
    data: [
      { department_name: "Cardiology", department_head: 1 },
      { department_name: "Dermatology", department_head: 2 },
      { department_name: "Pediatrics", department_head: 3 },
      { department_name: "Neurology", department_head: 4 },
      { department_name: "Orthopedics", department_head: 5 },
      { department_name: "Oncology", department_head: 6 },
      { department_name: "Endocrinology", department_head: 7 },
      { department_name: "Psychiatry", department_head: 8 },
      { department_name: "Ophthalmology", department_head: 9 },
      { department_name: "Gastroenterology", department_head: 10 },
    ],
  });
  console.log(createDepartment);
};

main();
