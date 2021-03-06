var llang = localStorage.getItem('lang');
if(llang){
  var lang = llang;
}
else 
  var lang = "ar";  
// text selector
var selectedLang = {
  en: {
    n0: "Clinic ",
    n1: "Dashboard",
    n2: "My Clinic",
    n3: "Users",
    n4: "Appointment",
    n5: "Doctors",
    n6: "Patients",
    n7: "First name",
    n8: "Last name",
    n9: "Email",
    n10: "Add User",
    n11: "Password",
    n12: "Confirm password",
    n13: "Confirm Email",
    n14: "Phone",
    n15: "Role",
    n16: "Confirm",
    n17: "Login",
    n18: "Logout",
    n19: "Add Doctor",
    n20: "Specialty",
    n21: "nationality",
    n22: "About",
    n23: "Address",
    n24: "Birth Date",
    n25: "Add Appointment",
    n26: "Date",
    n27: "Comments",
    n28: "Time",
    n29: "Add Patient",
    n30: "Edit",
    n31: "Update",
    n32: "Image",
    n33: "Clinic Information",
    n34: "Clinic Profile",
    n35: "name",
    n36: "Location",
    n37: "Hour",
    n38: "Visit",
    n39: "Doctor",
    n40: "Patient",
    n41: "Nationality",
    n42: "Appointments",
    n43: "City",
    n44: "Doctor Information",
    n45: "Patient Information",
    n46: "Patient Profile",
    n47: "Doctor Profile",
    n48: "Gender",
    n49: "Added By",
    n50: "Appointment Information",
    n51: "2 : This user can access everything except the dashboard panel",
    n52: "3 : This user can access everything except the dashboard and users panels",
    n53: "Weeks",
    n54: "Months",
    n55: "Days",
    n56: "Previous",
    n57: "Next",
    n58: "Add",
    n59: "Select",
    n60: "No selection",
    n61: "User Profile",
    n62: "User Information",
    n63: "Status",
    n64: "Scheduled",
    n65: "Attended",
    n66: "Finished",
    n67: "More",
    n68: "Update available schedule",
    n69: "Available schedule",
    n70: "Add new Drug ",
    n71: "Drug ",
    n72: "Drugs ",
    n73: "Delete ",

  },
  ar: {
    n0: "عيادة" ,
    n1: "لوحة المعلومات" ,
    n2: "عيادتي" ,
    n3: "المستخدمون" ,
    n4: "موعد" ,
    n5: "الأطباء" ,
    n6: "المرضى" ,
    n7: "الاسم الأول" ,
    n8: "اسم العائلة" ,
    n9: "البريد الإلكتروني" ,
    n10: "إضافة مستخدم" ,
    n11: "كلمة المرور" ,
    n12: "تأكيد كلمة المرور" ,
    n13: "تأكيد البريد الإلكتروني" ,
    n14: "الهاتف" ,
    n15: "الدور" ,
    n16: "تأكيد" ,
    n17: "تسجيل الدخول" ,
    n18: "تسجيل الخروج" ,
    n19: "إضافة طبيب" ,
    n20: "التخصص" ,
    n21: "الجنسية" ,
    n22: "حول" ,
    n23: "العنوان" ,
    n24: "تاريخ الميلاد" ,
    n25: "إضافة موعد" ,
    n26: "التاريخ" ,
    n27: "تعليقات" ,
    n28: "الوقت" ,
    n29: "إضافة مريض" ,
    n30: "تحرير" ,
    n31: "تحديث" ,
    n32: "صورة" ,
    n33: "معلومات العيادة" ,
    n34: "نبذة عن العيادة" ,
    n35: "الاسم" ,
    n36: "الموقع" ,
    n37: "ساعة" ,
    n38: "زيارة" ,
    n39: "الدكتور" ,
    n40: "المريض" ,
    n41: "الجنسية",
    n42: "المواعيد",
    n43: "المدينة",
    n44: "معلومات الطبيب" ,
    n45: "معلومات المريض" ,
    n46: "ملف المريض" ,
    n47: "ملف الطبيب" ,
    n48: "جنس",
    n49: "أضيف بواسطة",
    n50: "معلومات الموعد" ,
    n51: "2: يمكن لهذا المستخدم الوصول إلى كل شيء ما عدا لوحة المعلومات" ,
    n52: "3: يمكن لهذا المستخدم الوصول إلى كل شيء ما عدا لوحة المعلومات ولوحة المستخدمين" ,
    n53: "أسابيع" ,
    n54: "أشهر" ,
    n55: "أيام" ,
    n56: "السابق" ,
    n57: "التالي" , 
    n58: "أضف",
    n59: "أختر",
    n60: "لا اختيار" ,
    n61: "ملف تعريف المستخدم" ,
    n62: "معلومات المستخدم" ,
    n63: "الحالة" , 
    n64: "مجدول" , 
    n65: "حضر" , 
    n66: "انتهى" ,
    n67: "المزيد",
    n68: "تحديث الجدول الزمني المتاح",
    n69: "اوقات التواجد",
    n70: "إضافة عقار جديد ",
    n71: "دواء",
    n72: "الادوية ",
    n73: "حذف ",



}
};
export function getText(nid) {
  return selectedLang[lang][nid];
}
