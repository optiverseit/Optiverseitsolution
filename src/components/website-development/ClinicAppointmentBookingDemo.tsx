// src/components/website-development/ClinicAppointmentBookingDemo.tsx
import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Stethoscope,
  CheckCircle2,
  Phone,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  RotateCcw,
  Settings2,
  Sliders,
  Lock,
  Unlock,
  AlertCircle,
  Eye,
  Check,
  XCircle,
} from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  degree: string;
  specialty: string;
  department: string;
  opdHours: string;
  fee: string;
  shiftStatus: "On Duty" | "In Surgery" | "On Leave";
}

const sampleDoctors: Doctor[] = [
  {
    id: "dr-anish",
    name: "Dr. Anish Shrestha",
    degree: "BDS, MDS (Dental Surgeon)",
    specialty: "Dental Surgery & Implants",
    department: "Dental Care",
    opdHours: "10:00 AM – 4:00 PM",
    fee: "NPR 500",
    shiftStatus: "On Duty",
  },
  {
    id: "dr-puja",
    name: "Dr. Puja Joshi",
    degree: "MBBS, MD (Internal Medicine)",
    specialty: "Consultant Physician & OPD",
    department: "General Medicine",
    opdHours: "11:00 AM – 5:00 PM",
    fee: "NPR 600",
    shiftStatus: "On Duty",
  },
  {
    id: "dr-sabin",
    name: "Dr. Sabin Thapa",
    degree: "MD (Dermatology)",
    specialty: "Skin & Laser Specialist",
    department: "Dermatology",
    opdHours: "2:00 PM – 7:00 PM",
    fee: "NPR 700",
    shiftStatus: "On Duty",
  },
];

const departments = [
  "All Departments",
  "Dental Care",
  "General Medicine",
  "Dermatology",
];

export type SlotStatus = "available" | "booked" | "blocked";

export interface TimeSlotItem {
  id: string;
  time: string;
  status: SlotStatus;
  patientName?: string;
  token?: string;
}

const initialSlots: TimeSlotItem[] = [
  { id: "s1", time: "10:00 AM", status: "available" },
  { id: "s2", time: "10:30 AM", status: "booked", patientName: "Ramesh Sharma", token: "OPD-102" },
  { id: "s3", time: "11:00 AM", status: "available" },
  { id: "s4", time: "11:30 AM", status: "available" },
  { id: "s5", time: "01:00 PM", status: "blocked", patientName: "Lunch / Ward Round" },
  { id: "s6", time: "02:30 PM", status: "available" },
  { id: "s7", time: "04:00 PM", status: "available" },
  { id: "s8", time: "05:30 PM", status: "blocked", patientName: "Emergency OT Reserved" },
];

interface ClinicAppointmentBookingDemoProps {
  onOpenInquiry?: () => void;
}

export default function ClinicAppointmentBookingDemo({
  onOpenInquiry,
}: ClinicAppointmentBookingDemoProps) {
  // Mode toggle: "patient" for booking view, "admin" for reception slot management
  const [activeTab, setActiveTab] = useState<"patient" | "admin">("patient");

  // Patient Booking States
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedDoctorId, setSelectedDoctorId] = useState("dr-anish");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedSlotId, setSelectedSlotId] = useState("s4"); // default 11:30 AM
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientNote, setPatientNote] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [generatedToken, setGeneratedToken] = useState("");

  // Admin Slot Management States
  const [slots, setSlots] = useState<TimeSlotItem[]>(initialSlots);
  const [slotDuration, setSlotDuration] = useState<string>("20 Mins");
  const [dailyQuota, setDailyQuota] = useState<number>(14);
  const [autoBuffer, setAutoBuffer] = useState<boolean>(true);

  const filteredDoctors =
    selectedDept === "All Departments"
      ? sampleDoctors
      : sampleDoctors.filter((d) => d.department === selectedDept);

  const currentDoctor =
    sampleDoctors.find((d) => d.id === selectedDoctorId) || filteredDoctors[0] || sampleDoctors[0];

  const currentSlot = slots.find((s) => s.id === selectedSlotId) || slots[0];

  // Slot Management actions
  const toggleSlotStatus = (id: string) => {
    setSlots((prev) =>
      prev.map((slot) => {
        if (slot.id !== id) return slot;
        if (slot.status === "available") {
          return { ...slot, status: "blocked", patientName: "Blocked by Clinic Admin" };
        }
        if (slot.status === "blocked") {
          return { ...slot, status: "available", patientName: undefined };
        }
        // If already booked, allow receptionist to unbook or cancel
        return { ...slot, status: "available", patientName: undefined, token: undefined };
      })
    );
  };

  const handleBlockAfternoonShift = () => {
    setSlots((prev) =>
      prev.map((slot) => {
        const isAfternoon = slot.time.includes("01:") || slot.time.includes("02:") || slot.time.includes("04:") || slot.time.includes("05:");
        return isAfternoon && slot.status === "available"
          ? { ...slot, status: "blocked", patientName: "Afternoon Shift Blocked" }
          : slot;
      })
    );
  };

  const handleResetSlots = () => {
    setSlots(initialSlots);
  };

  const handleOpenAllSlots = () => {
    setSlots((prev) =>
      prev.map((slot) => ({ ...slot, status: "available", patientName: undefined, token: undefined }))
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tokenNum = Math.floor(100 + Math.random() * 900);
    const newToken = `OPD-${tokenNum}`;
    setGeneratedToken(newToken);
    setIsBooked(true);

    // Automatically mark the booked slot in the shared slot state
    setSlots((prev) =>
      prev.map((s) =>
        s.id === selectedSlotId
          ? { ...s, status: "booked", patientName: patientName || "Online Patient", token: newToken }
          : s
      )
    );
  };

  const handleReset = () => {
    setIsBooked(false);
    setPatientName("");
    setPatientPhone("");
    setPatientNote("");
  };

  const availableCount = slots.filter((s) => s.status === "available").length;
  const bookedCount = slots.filter((s) => s.status === "booked").length;
  const blockedCount = slots.filter((s) => s.status === "blocked").length;

  const generateWhatsAppConfirmationUrl = () => {
    const text = `Hello Optiverse IT Solution, I just tested the Clinic Appointment Booking & Slot Management System demo!\nDoctor: ${currentDoctor.name} (${currentDoctor.specialty})\nDate & Slot: ${selectedDate} at ${currentSlot.time}\nPatient: ${patientName || "Test Patient"} (${patientPhone || "+977-98XXXXXXXX"})\nToken: #${generatedToken}\n\nI want this complete Appointment Booking & Slot Management System deployed for my clinic!`;
    return `https://wa.me/9779803713931?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-3xl border-2 border-emerald-500/80 bg-gradient-to-br from-white via-emerald-50/25 to-green-50/30 p-6 sm:p-8 shadow-xl space-y-6">
      {/* Top Banner & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-emerald-100 pb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#166534] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
              <Sparkles size={12} className="text-amber-400 fill-amber-400" />
              <span>Included Core System • Live Interactive Demo</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-[11px] font-extrabold text-[#166534]">
              <Settings2 size={12} /> Real-Time Slot Management
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
            Doctor Appointment Booking & Slot Management System
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Test both sides of your clinic engine: the <strong>Patient Booking Experience</strong> and the <strong>Reception Slot Management Dashboard</strong> with real-time slot blocking and capacity control.
          </p>
        </div>

        {/* Tab Switcher: Patient vs Admin Slot Management */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("patient")}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                activeTab === "patient"
                  ? "bg-white text-[#166534] shadow-sm font-extrabold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <User size={13} />
              <span>Patient Booking View</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("admin")}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                activeTab === "admin"
                  ? "bg-[#166534] text-white shadow-sm font-extrabold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sliders size={13} />
              <span>Admin Slot Management</span>
            </button>
          </div>

          {onOpenInquiry && (
            <button
              type="button"
              onClick={onOpenInquiry}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition shadow"
            >
              <span>Deploy System</span>
              <ArrowRight size={13} />
            </button>
          )}
        </div>
      </div>

      {/* TAB 1: PATIENT BOOKING VIEW */}
      {activeTab === "patient" && (
        <>
          {isBooked ? (
            /* Booking Confirmation Success State */
            <div className="rounded-2xl border-2 border-emerald-400 bg-white p-6 sm:p-8 text-center space-y-5 shadow-lg">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#166534]">
                <CheckCircle2 size={40} />
              </div>

              <div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-[#166534] uppercase tracking-wide">
                  Token #{generatedToken} Confirmed
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">
                  Appointment Successfully Scheduled!
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  The slot was automatically updated in the clinic reception dashboard.
                </p>
              </div>

              <div className="mx-auto max-w-md rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
                <div className="flex justify-between pb-1.5 border-b border-slate-200/60 font-semibold">
                  <span className="text-slate-500">Doctor / Specialist:</span>
                  <span className="text-slate-900 font-bold">{currentDoctor.name}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200/60 font-semibold">
                  <span className="text-slate-500">Specialty / Department:</span>
                  <span className="text-[#166534] font-bold">{currentDoctor.specialty}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200/60 font-semibold">
                  <span className="text-slate-500">Confirmed Slot:</span>
                  <span className="text-slate-900 font-bold">
                    {selectedDate} at {currentSlot.time}
                  </span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200/60 font-semibold">
                  <span className="text-slate-500">Patient:</span>
                  <span className="text-slate-900 font-bold">
                    {patientName || "Test Patient"} ({patientPhone || "+977-98XXXXXXXX"})
                  </span>
                </div>
                <div className="flex justify-between font-semibold pt-0.5">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <span className="text-emerald-700 font-extrabold">{currentDoctor.fee} (Pay at Clinic)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={generateWhatsAppConfirmationUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-600 transition shadow"
                >
                  <MessageCircle size={16} />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveTab("admin")}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#166534] px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-green-900 transition shadow"
                >
                  <Eye size={15} />
                  <span>View in Admin Slot Manager</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  <RotateCcw size={14} />
                  <span>Book Another Slot</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* Step 1: Department Filter */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Stethoscope size={14} className="text-[#166534]" />
                  <span>Step 1: Select Medical Department</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      type="button"
                      onClick={() => {
                        setSelectedDept(dept);
                        const matching =
                          dept === "All Departments"
                            ? sampleDoctors[0]
                            : sampleDoctors.find((d) => d.department === dept) || sampleDoctors[0];
                        setSelectedDoctorId(matching.id);
                      }}
                      className={`rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                        selectedDept === dept
                          ? "bg-[#166534] text-white shadow-sm ring-1 ring-[#166534]"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Doctor */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <User size={14} className="text-[#166534]" />
                  <span>Step 2: Choose Specialist Doctor</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {filteredDoctors.map((doc) => {
                    const isSelected = doc.id === currentDoctor.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`rounded-2xl p-4 border text-left cursor-pointer transition ${
                          isSelected
                            ? "border-[#166534] bg-emerald-50/70 shadow-md ring-2 ring-emerald-500/30"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold uppercase rounded px-2 py-0.5 bg-green-100 text-[#166534]">
                            {doc.department}
                          </span>
                          <span className="text-xs font-black text-slate-900">{doc.fee}</span>
                        </div>
                        <h5 className="font-extrabold text-slate-900 text-sm mt-2">{doc.name}</h5>
                        <p className="text-[11px] text-[#166534] font-semibold">{doc.degree}</p>
                        <p className="text-[11px] text-slate-500 mt-1">{doc.specialty}</p>
                        <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock size={11} className="text-slate-400" />
                            <span>{doc.opdHours}</span>
                          </span>
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>{doc.shiftStatus}</span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Date & Slot Selection with Live Slot Management Awareness */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Date Selection */}
                <div className="md:col-span-4 space-y-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#166534]" />
                    <span>Step 3: Appointment Day</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Today", "Tomorrow", "In 2 Days"].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(day)}
                        className={`rounded-xl py-2 px-2 text-xs font-bold text-center transition cursor-pointer border ${
                          selectedDate === day
                            ? "border-[#166534] bg-[#166534] text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-Time Managed Time Slots */}
                <div className="md:col-span-8 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#166534]" />
                      <span>Available OPD Time Slots</span>
                    </label>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      🟢 {availableCount} Slots Open (Managed Real-Time)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {slots.map((slot) => {
                      const isSelected = selectedSlotId === slot.id;
                      const isAvailable = slot.status === "available";
                      const isBookedSlot = slot.status === "booked";
                      const isBlocked = slot.status === "blocked";

                      return (
                        <button
                          key={slot.id}
                          type="button"
                          disabled={!isAvailable}
                          onClick={() => isAvailable && setSelectedSlotId(slot.id)}
                          className={`rounded-xl py-2.5 px-2 text-xs font-bold text-center transition border flex flex-col items-center justify-center gap-0.5 ${
                            isSelected && isAvailable
                              ? "border-[#166534] bg-emerald-700 text-white shadow-md ring-2 ring-emerald-500/40"
                              : isAvailable
                              ? "border-emerald-200 bg-white text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/40 cursor-pointer"
                              : isBookedSlot
                              ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed opacity-75"
                              : "border-rose-200 bg-rose-50/60 text-rose-400 cursor-not-allowed opacity-75"
                          }`}
                        >
                          <span className="font-extrabold">{slot.time}</span>
                          <span className="text-[9px] uppercase font-bold tracking-tight">
                            {isAvailable ? "Open" : isBookedSlot ? "Booked" : "Unavailable"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 4: Patient Info */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <User size={14} className="text-[#166534]" />
                  <span>Step 4: Patient Intake Information</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Patient Full Name *"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp Number (+977) *"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Reason for visit / symptoms (Optional, e.g. toothache, routine checkup, skin rash)"
                  value={patientNote}
                  onChange={(e) => setPatientNote(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs sm:text-sm focus:border-[#166534] focus:outline-none focus:ring-1 focus:ring-[#166534]"
                />
              </div>

              {/* Action Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck size={16} className="text-[#166534] shrink-0" />
                  <span>Live booking updates automatically sync with reception schedule</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532d] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition cursor-pointer active:scale-[0.98]"
                >
                  <span>Confirm Appointment Booking</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}
        </>
      )}

      {/* TAB 2: RECEPTION & CLINIC ADMIN SLOT MANAGEMENT DASHBOARD */}
      {activeTab === "admin" && (
        <div className="space-y-6 bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
          {/* Admin Header Context */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Clinic Admin / Reception Control Panel
                </span>
              </div>
              <h4 className="text-xl font-black text-slate-900 mt-0.5">
                Doctor Shift & Live Slot Management
              </h4>
              <p className="text-xs text-slate-600">
                Manage doctor working rosters, block emergency slots, adjust consultation intervals, and prevent waiting room overbooking.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-2 text-xs shrink-0">
              <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-emerald-800 font-extrabold">
                {availableCount} Open
              </span>
              <span className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-slate-700 font-extrabold">
                {bookedCount} Booked
              </span>
              <span className="rounded-lg bg-rose-50 border border-rose-200 px-2.5 py-1 text-rose-700 font-extrabold">
                {blockedCount} Blocked
              </span>
            </div>
          </div>

          {/* Slot Configuration Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Consultation Interval
              </label>
              <div className="flex gap-1.5">
                {["15 Mins", "20 Mins", "30 Mins"].map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setSlotDuration(dur)}
                    className={`flex-1 py-1.5 rounded-lg font-bold border transition text-[11px] ${
                      slotDuration === dur
                        ? "bg-[#166534] text-white border-[#166534]"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Daily Doctor Patient Quota
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="5"
                  max="30"
                  value={dailyQuota}
                  onChange={(e) => setDailyQuota(Number(e.target.value))}
                  className="w-20 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#166534]"
                />
                <span className="text-[11px] text-slate-500 font-medium">Patients / Day</span>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Emergency Overbooking Shield
              </label>
              <button
                type="button"
                onClick={() => setAutoBuffer(!autoBuffer)}
                className={`w-full py-1.5 px-3 rounded-lg font-bold border text-[11px] flex items-center justify-between transition ${
                  autoBuffer
                    ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                    : "bg-slate-200 text-slate-600 border-slate-300"
                }`}
              >
                <span>{autoBuffer ? "Active Buffer (10-Min)" : "Disabled"}</span>
                <Check size={13} className={autoBuffer ? "opacity-100" : "opacity-0"} />
              </button>
            </div>
          </div>

          {/* Real-Time Interactive Slot Allocation Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Interactive Slot Grid for {currentDoctor.name}
                </h5>
                <p className="text-[11px] text-slate-500">
                  Click any slot below to instantly toggle between <strong>Open (Available)</strong> and <strong>Blocked</strong> status.
                </p>
              </div>

              {/* Slot Quick Batch Controls */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleBlockAfternoonShift}
                  className="rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-800 transition"
                >
                  Block Afternoon
                </button>
                <button
                  type="button"
                  onClick={handleOpenAllSlots}
                  className="rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800 transition"
                >
                  Open All
                </button>
                <button
                  type="button"
                  onClick={handleResetSlots}
                  className="rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 transition"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {slots.map((slot) => {
                const isAvail = slot.status === "available";
                const isBooked = slot.status === "booked";
                const isBlock = slot.status === "blocked";

                return (
                  <div
                    key={slot.id}
                    onClick={() => toggleSlotStatus(slot.id)}
                    className={`p-3.5 rounded-xl border transition cursor-pointer select-none flex flex-col justify-between ${
                      isAvail
                        ? "border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100/60"
                        : isBooked
                        ? "border-blue-300 bg-blue-50/70 hover:bg-blue-100/70"
                        : "border-rose-300 bg-rose-50/70 hover:bg-rose-100/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900 text-sm">{slot.time}</span>
                      <span
                        className={`text-[10px] font-black uppercase rounded px-1.5 py-0.5 ${
                          isAvail
                            ? "bg-emerald-200 text-emerald-900"
                            : isBooked
                            ? "bg-blue-200 text-blue-900"
                            : "bg-rose-200 text-rose-900"
                        }`}
                      >
                        {isAvail ? "Available" : isBooked ? "Booked" : "Blocked"}
                      </span>
                    </div>

                    <div className="mt-2 text-[11px]">
                      {isAvail && (
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <Unlock size={11} /> Ready for Patients
                        </span>
                      )}
                      {isBooked && (
                        <div className="text-blue-900 font-semibold">
                          <div>Token #{slot.token || "OPD-102"}</div>
                          <div className="text-[10px] text-blue-700">{slot.patientName}</div>
                        </div>
                      )}
                      {isBlock && (
                        <span className="text-rose-700 font-semibold flex items-center gap-1">
                          <Lock size={11} /> {slot.patientName || "Blocked Slot"}
                        </span>
                      )}
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-slate-200/60 text-[10px] text-slate-400 text-right">
                      Click to toggle status
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Switch back prompt */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500">
              Changes made in this management grid reflect immediately on the patient booking screen.
            </span>
            <button
              type="button"
              onClick={() => setActiveTab("patient")}
              className="inline-flex items-center gap-1.5 font-bold text-[#166534] hover:underline"
            >
              <span>Switch to Patient Booking View</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}

      {/* Feature Guarantee Grid */}
      <div className="pt-4 border-t border-emerald-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <CheckCircle2 size={15} className="text-[#166534] shrink-0" />
          <span className="font-semibold">Dynamic Slot Allocation</span>
        </div>
        <div className="flex items-center gap-2 text-slate-700">
          <CheckCircle2 size={15} className="text-[#166534] shrink-0" />
          <span className="font-semibold">1-Click Emergency Blocking</span>
        </div>
        <div className="flex items-center gap-2 text-slate-700">
          <CheckCircle2 size={15} className="text-[#166534] shrink-0" />
          <span className="font-semibold">Doctor Shift Roster</span>
        </div>
        <div className="flex items-center gap-2 text-slate-700">
          <CheckCircle2 size={15} className="text-[#166534] shrink-0" />
          <span className="font-semibold">WhatsApp & SMS Alerts</span>
        </div>
      </div>
    </div>
  );
}
