// ==================== ADD NEW USER ====================
$(function () {
    $('#login-show').click(function () {
        $('#login-modal').fadeIn().css("display", "flex");
    });
    $('#edit-show').click(function () {
        $('#EditModal').fadeIn().css("display", "flex");
    });
    $('#newrecord-show').click(function () {
        $('#newrecordmodal').fadeIn().css("display", "flex");
    });
    $('#newpayment-show').click(function () {
        $('#newpaymentmodal').fadeIn().css("display", "flex");
    });
    $('.editpayment-show').click(function () {
        $('#editpaymentmodal').fadeIn().css("display", "flex");
    });
    $('#editunit-show').click(function () {
        $('#editunitrecordmodal').fadeIn().css("display", "flex");
    });
    $('#receipt-show').click(function () {
        $('#receiptmodal').fadeIn().css("display", "flex");
    });



    $('.close-modal').click(function () {
        $('#login-modal').fadeOut();
        $('#EditModal').fadeOut();
        $('#newrecordmodal').fadeOut();
        $('#newpaymentmodal').fadeOut();
        $('#editpaymentmodal').fadeOut();
        $('#editunitrecordmodal').fadeOut();
        $('#flash-message').fadeOut();
        $('#receiptmodal').fadeOut();


    });



});

// ==================== ADD NEW USER ====================

// JS code for form validation in user role -->

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        var selectedRole = document.getElementById("user_role").value;
        var errorElement = document.getElementById("error");

        if (selectedRole === "Select User Role") {
            errorElement.style.display = "block";
            event.preventDefault(); // prevent form submission
        } else {
            errorElement.style.display = "none";
        }
    });
});

// ==================== EDIT  USER ====================
function showEditModal(userId, username, password, user_role) {
    document.getElementById('edit-user-form').action = '/edit/' + userId;
    document.getElementById('edit-username').value = username;
    document.getElementById('edit-password').value = password;
    document.getElementById('edit-userRole').value = user_role;

    // Setting background color to transparent
    document.getElementById('EditModal').style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Change alpha value as needed

    // Fading in the modal using jQuery
    $('#EditModal').fadeIn();

    // Displaying the modal
    document.getElementById('EditModal').style.display = 'flex';
}




// ==================== DELETE USER ====================
function confirmDelete(userId) {
    // Prompt the user for confirmation
    if (confirm("Are you sure you want to delete this user?")) {
        // If confirmed, redirect to the delete URL
        var deleteUrl = '/delete/' + userId;
        window.location.href = deleteUrl;
    } else {
        // If not confirmed, do nothing
        // You can add an alert or any other behavior here if needed
    }
}
function confirmDelete2(recordId) {
    // Prompt the user for confirmation
    if (confirm("Are you sure you want to delete this Record?")) {
        // If confirmed, redirect to the delete URL
        var deleteUrl3 = '/delete2/' + recordId;
        window.location.href = deleteUrl3;
    } else {
        // If not confirmed, do nothing
        // You can add an alert or any other behavior here if needed
    }
}

// ==================== DROPDOWN
var quadrantBlockUnitInfo = {
    "Q-1": {
        "B-1": ["U-1", "U-2", "U-3", "U-4", "U-5", "U-6", "U-7", "U-8", "U-9", "U-10", "U-11", "U-12", "U-13", "U-14", "U-15", "U-16", "U-17", "U-18", "U-19", "U-20", "U-21", "U-22", "U-23", "U-24", "U-25", "U-26", "U-27", "U-28", "U-29", "U-30", "U-31", "U-32", "U-33", "U-34", "U-35", "U-36", "U-37", "U-38", "U-39", "U-40", "U-41", "U-42", "U-43", "U-44", "U-45", "U-46", "U-47", "U-48", "U-49", "U-50", "U-51", "U-52", "U-53", "U-54", "U-55", "U-56", "U-57", "U-58", "U-59", "U-60", "U-61", "U-62", "U-63", "U-64", "U-65", "U-66", "U-67", "U-68", "U-69", "U-70", "U-71", "U-72", "U-73", "U-74", "U-75", "U-76", "U-77", "U-78", "U-79", "U-80", "U-81", "U-82", "U-83", "U-84", "U-85", "U-86", "U-87", "U-88", "U-89", "U-90", "U-91", "U-92", "U-93", "U-94", "U-95", "U-96", "U-97", "U-98", "U-99", "U-100", "U-101", "U-102", "U-103", "U-104"],
        "B-2": ["U-105", "U-106", "U-107", "U-108", "U-109", "U-110", "U-111", "U-112", "U-113", "U-114", "U-115", "U-116", "U-117", "U-118", "U-119", "U-120", "U-121", "U-122", "U-123", "U-124", "U-125", "U-126", "U-127", "U-128", "U-129", "U-130", "U-131", "U-132", "U-133", "U-134", "U-135", "U-136", "U-137", "U-138", "U-139", "U-140", "U-141", "U-142", "U-143", "U-144", "U-145", "U-146", "U-147", "U-148", "U-149", "U-150", "U-151", "U-152", "U-153", "U-154", "U-155", "U-156", "U-157", "U-158", "U-159", "U-160", "U-161", "U-162", "U-163", "U-164", "U-165", "U-166", "U-167", "U-168", "U-169", "U-170", "U-171", "U-172", "U-173", "U-174", "U-175", "U-176", "U-177", "U-178", "U-179", "U-180", "U-181", "U-182", "U-183", "U-184", "U-185", "U-186", "U-187", "U-188"],
        "B-3": ["U-189", "U-190", "U-191", "U-192", "U-193", "U-194", "U-195", "U-196", "U-197", "U-198", "U-199", "U-200", "U-201", "U-202", "U-203", "U-204", "U-205", "U-206", "U-207", "U-208", "U-209", "U-210", "U-211", "U-212", "U-213", "U-214", "U-215", "U-216", "U-217", "U-218", "U-219", "U-220", "U-221", "U-222", "U-223", "U-224", "U-225", "U-226", "U-227", "U-228", "U-229", "U-230", "U-231", "U-232", "U-233", "U-234", "U-235", "U-236", "U-237", "U-238", "U-239", "U-240", "U-241", "U-242", "U-243", "U-244", "U-245", "U-246", "U-247", "U-248", "U-249", "U-250", "U-251", "U-252", "U-253", "U-254", "U-255", "U-256", "U-257", "U-258", "U-259", "U-260", "U-261", "U-262", "U-263", "U-264", "U-265", "U-266", "U-267", "U-268", "U-269", "U-270", "U-271", "U-272"],
        "B-4": ["U-273", "U-274", "U-275", "U-276", "U-277", "U-278", "U-279", "U-280", "U-281", "U-282", "U-283", "U-284", "U-285", "U-286", "U-287", "U-288", "U-289", "U-290", "U-291", "U-292", "U-293", "U-294", "U-295", "U-296", "U-297", "U-298", "U-299", "U-300", "U-301", "U-302", "U-303", "U-304", "U-305", "U-306", "U-307", "U-308", "U-309", "U-310", "U-311", "U-312", "U-313", "U-314", "U-315", "U-316", "U-317", "U-318", "U-319", "U-320", "U-321", "U-322", "U-323", "U-324", "U-325", "U-326", "U-327", "U-328", "U-329", "U-330", "U-331", "U-332", "U-333", "U-334", "U-335", "U-336", "U-337", "U-338", "U-339", "U-340", "U-341", "U-342", "U-343", "U-344", "U-345", "U-346", "U-347", "U-348", "U-349", "U-350", "U-351", "U-352", "U-353", "U-354", "U-355", "U-356"],
        "B-5": ["U-357", "U-358", "U-359", "U-360", "U-361", "U-362", "U-363", "U-364", "U-365", "U-366", "U-367", "U-368", "U-369", "U-370", "U-371", "U-372", "U-373", "U-374", "U-375", "U-376", "U-377", "U-378", "U-379", "U-380", "U-381", "U-382", "U-383", "U-384", "U-385", "U-386", "U-387", "U-388", "U-389", "U-390", "U-391", "U-392", "U-393", "U-394", "U-395", "U-396", "U-397", "U-398", "U-399", "U-400", "U-401", "U-402", "U-403", "U-404", "U-405", "U-406", "U-407", "U-408", "U-409", "U-410", "U-411", "U-412", "U-413", "U-414", "U-415", "U-416", "U-417", "U-418", "U-419", "U-420", "U-421", "U-422", "U-423", "U-424", "U-425", "U-426", "U-427", "U-428", "U-429", "U-430", "U-431", "U-432", "U-433", "U-434", "U-435", "U-436", "U-437", "U-438", "U-439", "U-440"],
        "B-6": ["U-441", "U-442", "U-443", "U-444", "U-445", "U-446", "U-447", "U-448", "U-449", "U-450", "U-451", "U-452", "U-453", "U-454", "U-455", "U-456", "U-457", "U-458", "U-459", "U-460", "U-461", "U-462", "U-463", "U-464", "U-465", "U-466", "U-467", "U-468", "U-469", "U-470", "U-471", "U-472", "U-473", "U-474", "U-475", "U-476", "U-477", "U-478", "U-479", "U-480", "U-481", "U-482", "U-483", "U-484", "U-485", "U-486", "U-487", "U-488", "U-489", "U-490", "U-491", "U-492", "U-493", "U-494", "U-495", "U-496", "U-497", "U-498", "U-499", "U-500", "U-501", "U-502", "U-503", "U-504", "U-505", "U-506", "U-507", "U-508", "U-509", "U-510", "U-511", "U-512", "U-513", "U-514", "U-515", "U-516", "U-517", "U-518", "U-519", "U-520", "U-521", "U-522", "U-523", "U-524"],
        "B-7": ["U-525", "U-526", "U-527", "U-528", "U-529", "U-530", "U-531", "U-532", "U-533", "U-534", "U-535", "U-536", "U-537", "U-538", "U-539", "U-540", "U-541", "U-542", "U-543", "U-544", "U-545", "U-546", "U-547", "U-548", "U-549", "U-550", "U-551", "U-552", "U-553", "U-554", "U-555", "U-556", "U-557", "U-558", "U-559", "U-560", "U-561", "U-562", "U-563", "U-564", "U-565", "U-566", "U-567", "U-568", "U-569", "U-570", "U-571", "U-572", "U-573", "U-574", "U-575", "U-576", "U-577", "U-578", "U-579", "U-580", "U-581", "U-582", "U-583", "U-584", "U-585", "U-586", "U-587", "U-588", "U-589", "U-590", "U-591", "U-592", "U-593", "U-594", "U-595", "U-596", "U-597", "U-598", "U-599", "U-600", "U-601", "U-602", "U-603", "U-604", "U-605", "U-606", "U-607", "U-608"],
        "B-8": ["U-609", "U-610", "U-611", "U-612", "U-613", "U-614", "U-615", "U-616", "U-617", "U-618", "U-619", "U-620", "U-621", "U-622", "U-623", "U-624", "U-625", "U-626", "U-627", "U-628", "U-629", "U-630", "U-631", "U-632", "U-633", "U-634", "U-635", "U-636", "U-637", "U-638", "U-639", "U-640", "U-641", "U-642", "U-643", "U-644", "U-645", "U-646", "U-647", "U-648", "U-649", "U-650", "U-651", "U-652", "U-653", "U-654", "U-655", "U-656", "U-657", "U-658", "U-659", "U-660", "U-661", "U-662", "U-663", "U-664", "U-665", "U-666", "U-667", "U-668", "U-669", "U-670", "U-671", "U-672", "U-673", "U-674", "U-675", "U-676", "U-677", "U-678", "U-679", "U-680", "U-681", "U-682", "U-683", "U-684", "U-685", "U-686", "U-687", "U-688", "U-689", "U-690", "U-691", "U-692"],
        "B-9": ["U-693", "U-694", "U-695", "U-696", "U-697", "U-698", "U-699", "U-700", "U-701", "U-702", "U-703", "U-704", "U-705", "U-706", "U-707", "U-708", "U-709", "U-710", "U-711", "U-712", "U-713", "U-714", "U-715", "U-716", "U-717", "U-718", "U-719", "U-720", "U-721", "U-722", "U-723", "U-724", "U-725", "U-726", "U-727", "U-728", "U-729", "U-730", "U-731", "U-732", "U-733", "U-734", "U-735", "U-736", "U-737", "U-738", "U-739", "U-740", "U-741", "U-742", "U-743", "U-744", "U-745", "U-746", "U-747", "U-748", "U-749", "U-750", "U-751", "U-752", "U-753", "U-754", "U-755", "U-756", "U-757", "U-758", "U-759", "U-760", "U-761", "U-762", "U-763", "U-764", "U-765", "U-766", "U-767", "U-768", "U-769", "U-770", "U-771", "U-772", "U-773", "U-774", "U-775", "U-776"]
    },
    "Q-2": {
        "B-10": ["U-777", "U-778", "U-779", "U-780", "U-781", "U-782", "U-783", "U-784", "U-785", "U-786", "U-787", "U-788", "U-789", "U-790", "U-791", "U-792", "U-793", "U-794", "U-795", "U-796", "U-797", "U-798", "U-799", "U-800", "U-801", "U-802", "U-803", "U-804", "U-805", "U-806", "U-807", "U-808", "U-809", "U-810", "U-811", "U-812", "U-813", "U-814", "U-815", "U-816", "U-817", "U-818", "U-819", "U-820", "U-821", "U-822", "U-823", "U-824", "U-825", "U-826", "U-827", "U-828", "U-829", "U-830", "U-831", "U-832", "U-833", "U-834", "U-835", "U-836", "U-837", "U-838", "U-839", "U-840", "U-841", "U-842", "U-843", "U-844", "U-845", "U-846", "U-847", "U-848", "U-849", "U-850", "U-851", "U-852", "U-853", "U-854", "U-855", "U-856", "U-857", "U-858", "U-859", "U-860"],
        "B-11": ["U-861", "U-862", "U-863", "U-864", "U-865", "U-866", "U-867", "U-868", "U-869", "U-870", "U-871", "U-872", "U-873", "U-874", "U-875", "U-876", "U-877", "U-878", "U-879", "U-880", "U-881", "U-882", "U-883", "U-884", "U-885", "U-886", "U-887", "U-888", "U-889", "U-890", "U-891", "U-892", "U-893", "U-894", "U-895", "U-896", "U-897", "U-898", "U-899", "U-900", "U-901", "U-902", "U-903", "U-904", "U-905", "U-906", "U-907", "U-908", "U-909", "U-910", "U-911", "U-912", "U-913", "U-914", "U-915", "U-916", "U-917", "U-918", "U-919", "U-920", "U-921", "U-922", "U-923", "U-924", "U-925", "U-926", "U-927", "U-928", "U-929", "U-930", "U-931", "U-932", "U-933", "U-934", "U-935", "U-936", "U-937", "U-938", "U-939", "U-940", "U-941", "U-942", "U-943", "U-944"],
        "B-12": ["U-945", "U-946", "U-947", "U-948", "U-949", "U-950", "U-951", "U-952", "U-953", "U-954", "U-955", "U-956", "U-957", "U-958", "U-959", "U-960", "U-961", "U-962", "U-963", "U-964", "U-965", "U-966", "U-967", "U-968", "U-969", "U-970", "U-971", "U-972", "U-973", "U-974", "U-975", "U-976", "U-977", "U-978", "U-979", "U-980", "U-981", "U-982", "U-983", "U-984", "U-985", "U-986", "U-987", "U-988", "U-989", "U-990", "U-991", "U-992", "U-993", "U-994", "U-995", "U-996", "U-997", "U-998", "U-999", "U-1000", "U-1001", "U-1002", "U-1003", "U-1004", "U-1005", "U-1006", "U-1007", "U-1008", "U-1009", "U-1010", "U-1011", "U-1012", "U-1013", "U-1014", "U-1015", "U-1016", "U-1017", "U-1018", "U-1019", "U-1020", "U-1021", "U-1022", "U-1023", "U-1024", "U-1025", "U-1026", "U-1027", "U-1028"],
        "B-13": ["U-1029", "U-1030", "U-1031", "U-1032", "U-1033", "U-1034", "U-1035", "U-1036", "U-1037", "U-1038", "U-1039", "U-1040", "U-1041", "U-1042", "U-1043", "U-1044", "U-1045", "U-1046", "U-1047", "U-1048", "U-1049", "U-1050", "U-1051", "U-1052", "U-1053", "U-1054", "U-1055", "U-1056", "U-1057", "U-1058", "U-1059", "U-1060", "U-1061", "U-1062", "U-1063", "U-1064", "U-1065", "U-1066", "U-1067", "U-1068", "U-1069", "U-1070", "U-1071", "U-1072", "U-1073", "U-1074", "U-1075", "U-1076", "U-1077", "U-1078", "U-1079", "U-1080", "U-1081", "U-1082", "U-1083", "U-1084", "U-1085", "U-1086", "U-1087", "U-1088", "U-1089", "U-1090", "U-1091", "U-1092", "U-1093", "U-1094", "U-1095", "U-1096", "U-1097", "U-1098", "U-1099", "U-1100", "U-1101", "U-1102", "U-1103", "U-1104", "U-1105", "U-1106", "U-1107", "U-1108", "U-1109", "U-1110", "U-1111", "U-1112"],
        "B-14": ["U-1113", "U-1114", "U-1115", "U-1116", "U-1117", "U-1118", "U-1119", "U-1120", "U-1121", "U-1122", "U-1123", "U-1124", "U-1125", "U-1126", "U-1127", "U-1128", "U-1129", "U-1130", "U-1131", "U-1132", "U-1133", "U-1134", "U-1135", "U-1136", "U-1137", "U-1138", "U-1139", "U-1140", "U-1141", "U-1142", "U-1143", "U-1144", "U-1145", "U-1146", "U-1147", "U-1148", "U-1149", "U-1150", "U-1151", "U-1152", "U-1153", "U-1154", "U-1155", "U-1156", "U-1157", "U-1158", "U-1159", "U-1160", "U-1161", "U-1162", "U-1163", "U-1164", "U-1165", "U-1166", "U-1167", "U-1168", "U-1169", "U-1170", "U-1171", "U-1172", "U-1173", "U-1174", "U-1175", "U-1176", "U-1177", "U-1178", "U-1179", "U-1180", "U-1181", "U-1182", "U-1183", "U-1184", "U-1185", "U-1186", "U-1187", "U-1188", "U-1189", "U-1190", "U-1191", "U-1192", "U-1193", "U-1194", "U-1195", "U-1196"],
        "B-15": ["U-1197", "U-1198", "U-1199", "U-1200", "U-1201", "U-1202", "U-1203", "U-1204", "U-1205", "U-1206", "U-1207", "U-1208", "U-1209", "U-1210", "U-1211", "U-1212", "U-1213", "U-1214", "U-1215", "U-1216", "U-1217", "U-1218", "U-1219", "U-1220", "U-1221", "U-1222", "U-1223", "U-1224", "U-1225", "U-1226", "U-1227", "U-1228", "U-1229", "U-1230", "U-1231", "U-1232", "U-1233", "U-1234", "U-1235", "U-1236", "U-1237", "U-1238", "U-1239", "U-1240", "U-1241", "U-1242", "U-1243", "U-1244", "U-1245", "U-1246", "U-1247", "U-1248", "U-1249", "U-1250", "U-1251", "U-1252", "U-1253", "U-1254", "U-1255", "U-1256", "U-1257", "U-1258", "U-1259", "U-1260", "U-1261", "U-1262", "U-1263", "U-1264", "U-1265", "U-1266", "U-1267", "U-1268", "U-1269", "U-1270", "U-1271", "U-1272", "U-1273", "U-1274", "U-1275", "U-1276", "U-1277", "U-1278", "U-1279", "U-1280"],
        "B-16": ["U-1281", "U-1282", "U-1283", "U-1284", "U-1285", "U-1286", "U-1287", "U-1288", "U-1289", "U-1290", "U-1291", "U-1292", "U-1293", "U-1294", "U-1295", "U-1296", "U-1297", "U-1298", "U-1299", "U-1300", "U-1301", "U-1302", "U-1303", "U-1304", "U-1305", "U-1306", "U-1307", "U-1308", "U-1309", "U-1310", "U-1311", "U-1312", "U-1313", "U-1314", "U-1315", "U-1316", "U-1317", "U-1318", "U-1319", "U-1320", "U-1321", "U-1322", "U-1323", "U-1324", "U-1325", "U-1326", "U-1327", "U-1328", "U-1329", "U-1330", "U-1331", "U-1332", "U-1333", "U-1334", "U-1335", "U-1336", "U-1337", "U-1338", "U-1339", "U-1340", "U-1341", "U-1342", "U-1343", "U-1344", "U-1345", "U-1346", "U-1347", "U-1348", "U-1349", "U-1350", "U-1351", "U-1352", "U-1353", "U-1354", "U-1355", "U-1356", "U-1357", "U-1358", "U-1359", "U-1360", "U-1361", "U-1362", "U-1363", "U-1364"],
        "B-17": ["U-1365", "U-1366", "U-1367", "U-1368", "U-1369", "U-1370", "U-1371", "U-1372", "U-1373", "U-1374", "U-1375", "U-1376", "U-1377", "U-1378", "U-1379", "U-1380", "U-1381", "U-1382", "U-1383", "U-1384", "U-1385", "U-1386", "U-1387", "U-1388", "U-1389", "U-1390", "U-1391", "U-1392", "U-1393", "U-1394", "U-1395", "U-1396", "U-1397", "U-1398", "U-1399", "U-1400", "U-1401", "U-1402", "U-1403", "U-1404", "U-1405", "U-1406", "U-1407", "U-1408", "U-1409", "U-1410", "U-1411", "U-1412", "U-1413", "U-1414", "U-1415", "U-1416", "U-1417", "U-1418", "U-1419", "U-1420", "U-1421", "U-1422", "U-1423", "U-1424", "U-1425", "U-1426", "U-1427", "U-1428", "U-1429", "U-1430", "U-1431", "U-1432", "U-1433", "U-1434", "U-1435", "U-1436", "U-1437", "U-1438", "U-1439", "U-1440", "U-1441", "U-1442", "U-1443", "U-1444", "U-1445", "U-1446", "U-1447", "U-1448"]
    },

    "Q-3": {
        "B-18": ["U-1449", "U-1450", "U-1451", "U-1452", "U-1453", "U-1454", "U-1455", "U-1456", "U-1457", "U-1458", "U-1459", "U-1460", "U-1461", "U-1462", "U-1463", "U-1464", "U-1465", "U-1466", "U-1467", "U-1468", "U-1469", "U-1470", "U-1471", "U-1472", "U-1473", "U-1474", "U-1475", "U-1476", "U-1477", "U-1478", "U-1479", "U-1480", "U-1481", "U-1482", "U-1483", "U-1484", "U-1485", "U-1486", "U-1487", "U-1488", "U-1489", "U-1490", "U-1491", "U-1492", "U-1493", "U-1494", "U-1495", "U-1496", "U-1497", "U-1498", "U-1499", "U-1500", "U-1501", "U-1502", "U-1503", "U-1504", "U-1505", "U-1506", "U-1507", "U-1508", "U-1509", "U-1510", "U-1511", "U-1512", "U-1513", "U-1514", "U-1515", "U-1516", "U-1517", "U-1518", "U-1519", "U-1520", "U-1521", "U-1522", "U-1523", "U-1524", "U-1525", "U-1526", "U-1527", "U-1528", "U-1529", "U-1530", "U-1531", "U-1532"],
        "B-19": ["U-1533", "U-1534", "U-1535", "U-1536", "U-1537", "U-1538", "U-1539", "U-1540", "U-1541", "U-1542", "U-1543", "U-1544", "U-1545", "U-1546", "U-1547", "U-1548", "U-1549", "U-1550", "U-1551", "U-1552", "U-1553", "U-1554", "U-1555", "U-1556", "U-1557", "U-1558", "U-1559", "U-1560", "U-1561", "U-1562", "U-1563", "U-1564", "U-1565", "U-1566", "U-1567", "U-1568", "U-1569", "U-1570", "U-1571", "U-1572", "U-1573", "U-1574", "U-1575", "U-1576", "U-1577", "U-1578", "U-1579", "U-1580", "U-1581", "U-1582", "U-1583", "U-1584", "U-1585", "U-1586", "U-1587", "U-1588", "U-1589", "U-1590", "U-1591", "U-1592", "U-1593", "U-1594", "U-1595", "U-1596", "U-1597", "U-1598", "U-1599", "U-1600", "U-1601", "U-1602", "U-1603", "U-1604", "U-1605", "U-1606", "U-1607", "U-1608", "U-1609", "U-1610", "U-1611", "U-1612", "U-1613", "U-1614", "U-1615", "U-1616"],
        "B-20": ["U-1617", "U-1618", "U-1619", "U-1620", "U-1621", "U-1622", "U-1623", "U-1624", "U-1625", "U-1626", "U-1627", "U-1628", "U-1629", "U-1630", "U-1631", "U-1632", "U-1633", "U-1634", "U-1635", "U-1636", "U-1637", "U-1638", "U-1639", "U-1640", "U-1641", "U-1642", "U-1643", "U-1644", "U-1645", "U-1646", "U-1647", "U-1648", "U-1649", "U-1650", "U-1651", "U-1652", "U-1653", "U-1654", "U-1655", "U-1656", "U-1657", "U-1658", "U-1659", "U-1660", "U-1661", "U-1662", "U-1663", "U-1664", "U-1665", "U-1666", "U-1667", "U-1668", "U-1669", "U-1670", "U-1671", "U-1672", "U-1673", "U-1674", "U-1675", "U-1676", "U-1677", "U-1678", "U-1679", "U-1680", "U-1681", "U-1682", "U-1683", "U-1684", "U-1685", "U-1686", "U-1687", "U-1688", "U-1689", "U-1690", "U-1691", "U-1692", "U-1693", "U-1694", "U-1695", "U-1696", "U-1697", "U-1698", "U-1699", "U-1700"],
        "B-21": ["U-1701", "U-1702", "U-1703", "U-1704", "U-1705", "U-1706", "U-1707", "U-1708", "U-1709", "U-1710", "U-1711", "U-1712", "U-1713", "U-1714", "U-1715", "U-1716", "U-1717", "U-1718", "U-1719", "U-1720", "U-1721", "U-1722", "U-1723", "U-1724", "U-1725", "U-1726", "U-1727", "U-1728", "U-1729", "U-1730", "U-1731", "U-1732", "U-1733", "U-1734", "U-1735", "U-1736", "U-1737", "U-1738", "U-1739", "U-1740", "U-1741", "U-1742", "U-1743", "U-1744", "U-1745", "U-1746", "U-1747", "U-1748", "U-1749", "U-1750", "U-1751", "U-1752", "U-1753", "U-1754", "U-1755", "U-1756", "U-1757", "U-1758", "U-1759", "U-1760", "U-1761", "U-1762", "U-1763", "U-1764", "U-1765", "U-1766", "U-1767", "U-1768", "U-1769", "U-1770", "U-1771", "U-1772", "U-1773", "U-1774", "U-1775", "U-1776", "U-1777", "U-1778", "U-1779", "U-1780", "U-1781", "U-1782", "U-1783", "U-1784"],
        "B-22": ["U-1785", "U-1786", "U-1787", "U-1788", "U-1789", "U-1790", "U-1791", "U-1792", "U-1793", "U-1794", "U-1795", "U-1796", "U-1797", "U-1798", "U-1799", "U-1800", "U-1801", "U-1802", "U-1803", "U-1804", "U-1805", "U-1806", "U-1807", "U-1808", "U-1809", "U-1810", "U-1811", "U-1812", "U-1813", "U-1814", "U-1815", "U-1816", "U-1817", "U-1818", "U-1819", "U-1820", "U-1821", "U-1822", "U-1823", "U-1824", "U-1825", "U-1826", "U-1827", "U-1828", "U-1829", "U-1830", "U-1831", "U-1832", "U-1833", "U-1834", "U-1835", "U-1836", "U-1837", "U-1838", "U-1839", "U-1840", "U-1841", "U-1842", "U-1843", "U-1844", "U-1845", "U-1846", "U-1847", "U-1848", "U-1849", "U-1850", "U-1851", "U-1852", "U-1853", "U-1854", "U-1855", "U-1856", "U-1857", "U-1858", "U-1859", "U-1860", "U-1861", "U-1862", "U-1863", "U-1864", "U-1865", "U-1866", "U-1867", "U-1868"],
        "B-23": ["U-1869", "U-1870", "U-1871", "U-1872", "U-1873", "U-1874", "U-1875", "U-1876", "U-1877", "U-1878", "U-1879", "U-1880", "U-1881", "U-1882", "U-1883", "U-1884", "U-1885", "U-1886", "U-1887", "U-1888", "U-1889", "U-1890", "U-1891", "U-1892", "U-1893", "U-1894", "U-1895", "U-1896", "U-1897", "U-1898", "U-1899", "U-1900", "U-1901", "U-1902", "U-1903", "U-1904", "U-1905", "U-1906", "U-1907", "U-1908", "U-1909", "U-1910", "U-1911", "U-1912", "U-1913", "U-1914", "U-1915", "U-1916", "U-1917", "U-1918", "U-1919", "U-1920", "U-1921", "U-1922", "U-1923", "U-1924", "U-1925", "U-1926", "U-1927", "U-1928", "U-1929", "U-1930", "U-1931", "U-1932", "U-1933", "U-1934", "U-1935", "U-1936", "U-1937", "U-1938", "U-1939", "U-1940", "U-1941", "U-1942", "U-1943", "U-1944", "U-1945", "U-1946", "U-1947", "U-1948", "U-1949", "U-1950", "U-1951", "U-1952"],
        "B-24": ["U-1953", "U-1954", "U-1955", "U-1956", "U-1957", "U-1958", "U-1959", "U-1960", "U-1961", "U-1962", "U-1963", "U-1964", "U-1965", "U-1966", "U-1967", "U-1968", "U-1969", "U-1970", "U-1971", "U-1972", "U-1973", "U-1974", "U-1975", "U-1976", "U-1977", "U-1978", "U-1979", "U-1980", "U-1981", "U-1982", "U-1983", "U-1984", "U-1985", "U-1986", "U-1987", "U-1988", "U-1989", "U-1990", "U-1991", "U-1992", "U-1993", "U-1994", "U-1995", "U-1996", "U-1997", "U-1998", "U-1999", "U-2000", "U-2001", "U-2002", "U-2003", "U-2004", "U-2005", "U-2006", "U-2007", "U-2008", "U-2009", "U-2010", "U-2011", "U-2012", "U-2013", "U-2014", "U-2015", "U-2016", "U-2017", "U-2018", "U-2019", "U-2020", "U-2021", "U-2022", "U-2023", "U-2024", "U-2025", "U-2026", "U-2027", "U-2028", "U-2029", "U-2030", "U-2031", "U-2032", "U-2033", "U-2034", "U-2035", "U-2036"],
        "B-25": ["U-2037", "U-2038", "U-2039", "U-2040", "U-2041", "U-2042", "U-2043", "U-2044", "U-2045", "U-2046", "U-2047", "U-2048", "U-2049", "U-2050", "U-2051", "U-2052", "U-2053", "U-2054", "U-2055", "U-2056", "U-2057", "U-2058", "U-2059", "U-2060", "U-2061", "U-2062", "U-2063", "U-2064", "U-2065", "U-2066", "U-2067", "U-2068", "U-2069", "U-2070", "U-2071", "U-2072", "U-2073", "U-2074", "U-2075", "U-2076", "U-2077", "U-2078", "U-2079", "U-2080", "U-2081", "U-2082", "U-2083", "U-2084", "U-2085", "U-2086", "U-2087", "U-2088", "U-2089", "U-2090", "U-2091", "U-2092", "U-2093", "U-2094", "U-2095", "U-2096", "U-2097", "U-2098", "U-2099", "U-2100", "U-2101", "U-2102", "U-2103", "U-2104", "U-2105", "U-2106", "U-2107", "U-2108", "U-2109", "U-2110", "U-2111", "U-2112", "U-2113", "U-2114", "U-2115", "U-2116", "U-2117", "U-2118", "U-2119", "U-2120"]
    },
    "Q-4": {
        "B-26": ["U-2121", "U-2122", "U-2123", "U-2124", "U-2125", "U-2126", "U-2127", "U-2128", "U-2129", "U-2130", "U-2131", "U-2132", "U-2133", "U-2134", "U-2135", "U-2136", "U-2137", "U-2138", "U-2139", "U-2140", "U-2141", "U-2142", "U-2143", "U-2144", "U-2145", "U-2146", "U-2147", "U-2148", "U-2149", "U-2150", "U-2151", "U-2152", "U-2153", "U-2154", "U-2155", "U-2156", "U-2157", "U-2158", "U-2159", "U-2160", "U-2161", "U-2162", "U-2163", "U-2164", "U-2165", "U-2166", "U-2167", "U-2168", "U-2169", "U-2170", "U-2171", "U-2172", "U-2173", "U-2174", "U-2175", "U-2176", "U-2177", "U-2178", "U-2179", "U-2180", "U-2181", "U-2182", "U-2183", "U-2184", "U-2185", "U-2186", "U-2187", "U-2188", "U-2189", "U-2190", "U-2191", "U-2192", "U-2193", "U-2194", "U-2195", "U-2196", "U-2197", "U-2198", "U-2199", "U-2200", "U-2201", "U-2202", "U-2203", "U-2204"],
        "B-27": ["U-2205", "U-2206", "U-2207", "U-2208", "U-2209", "U-2210", "U-2211", "U-2212", "U-2213", "U-2214", "U-2215", "U-2216", "U-2217", "U-2218", "U-2219", "U-2220", "U-2221", "U-2222", "U-2223", "U-2224", "U-2225", "U-2226", "U-2227", "U-2228", "U-2229", "U-2230", "U-2231", "U-2232", "U-2233", "U-2234", "U-2235", "U-2236", "U-2237", "U-2238", "U-2239", "U-2240", "U-2241", "U-2242", "U-2243", "U-2244", "U-2245", "U-2246", "U-2247", "U-2248", "U-2249", "U-2250", "U-2251", "U-2252", "U-2253", "U-2254", "U-2255", "U-2256", "U-2257", "U-2258", "U-2259", "U-2260", "U-2261", "U-2262", "U-2263", "U-2264", "U-2265", "U-2266", "U-2267", "U-2268", "U-2269", "U-2270", "U-2271", "U-2272", "U-2273", "U-2274", "U-2275", "U-2276", "U-2277", "U-2278", "U-2279", "U-2280", "U-2281", "U-2282", "U-2283", "U-2284", "U-2285", "U-2286", "U-2287", "U-2288"],
        "B-28": ["U-2289", "U-2290", "U-2291", "U-2292", "U-2293", "U-2294", "U-2295", "U-2296", "U-2297", "U-2298", "U-2299", "U-2300", "U-2301", "U-2302", "U-2303", "U-2304", "U-2305", "U-2306", "U-2307", "U-2308", "U-2309", "U-2310", "U-2311", "U-2312", "U-2313", "U-2314", "U-2315", "U-2316", "U-2317", "U-2318", "U-2319", "U-2320", "U-2321", "U-2322", "U-2323", "U-2324", "U-2325", "U-2326", "U-2327", "U-2328", "U-2329", "U-2330", "U-2331", "U-2332", "U-2333", "U-2334", "U-2335", "U-2336", "U-2337", "U-2338", "U-2339", "U-2340", "U-2341", "U-2342", "U-2343", "U-2344", "U-2345", "U-2346", "U-2347", "U-2348", "U-2349", "U-2350", "U-2351", "U-2352", "U-2353", "U-2354", "U-2355", "U-2356", "U-2357", "U-2358", "U-2359", "U-2360", "U-2361", "U-2362", "U-2363", "U-2364", "U-2365", "U-2366", "U-2367", "U-2368", "U-2369", "U-2370", "U-2371", "U-2372"],
        "B-29": ["U-2373", "U-2374", "U-2375", "U-2376", "U-2377", "U-2378", "U-2379", "U-2380", "U-2381", "U-2382", "U-2383", "U-2384", "U-2385", "U-2386", "U-2387", "U-2388", "U-2389", "U-2390", "U-2391", "U-2392", "U-2393", "U-2394", "U-2395", "U-2396", "U-2397", "U-2398", "U-2399", "U-2400", "U-2401", "U-2402", "U-2403", "U-2404", "U-2405", "U-2406", "U-2407", "U-2408", "U-2409", "U-2410", "U-2411", "U-2412", "U-2413", "U-2414", "U-2415", "U-2416", "U-2417", "U-2418", "U-2419", "U-2420", "U-2421", "U-2422", "U-2423", "U-2424", "U-2425", "U-2426", "U-2427", "U-2428", "U-2429", "U-2430", "U-2431", "U-2432", "U-2433", "U-2434", "U-2435", "U-2436", "U-2437", "U-2438", "U-2439", "U-2440", "U-2441", "U-2442", "U-2443", "U-2444", "U-2445", "U-2446", "U-2447", "U-2448", "U-2449", "U-2450", "U-2451", "U-2452", "U-2453", "U-2454", "U-2455", "U-2456"],
        "B-30": ["U-2457", "U-2458", "U-2459", "U-2460", "U-2461", "U-2462", "U-2463", "U-2464", "U-2465", "U-2466", "U-2467", "U-2468", "U-2469", "U-2470", "U-2471", "U-2472", "U-2473", "U-2474", "U-2475", "U-2476", "U-2477", "U-2478", "U-2479", "U-2480", "U-2481", "U-2482", "U-2483", "U-2484", "U-2485", "U-2486", "U-2487", "U-2488", "U-2489", "U-2490", "U-2491", "U-2492", "U-2493", "U-2494", "U-2495", "U-2496", "U-2497", "U-2498", "U-2499", "U-2500", "U-2501", "U-2502", "U-2503", "U-2504", "U-2505", "U-2506", "U-2507", "U-2508", "U-2509", "U-2510", "U-2511", "U-2512", "U-2513", "U-2514", "U-2515", "U-2516", "U-2517", "U-2518", "U-2519", "U-2520", "U-2521", "U-2522", "U-2523", "U-2524", "U-2525", "U-2526", "U-2527", "U-2528", "U-2529", "U-2530", "U-2531", "U-2532", "U-2533", "U-2534", "U-2535", "U-2536", "U-2537", "U-2538", "U-2539", "U-2540"],
        "B-31": ["U-2541", "U-2542", "U-2543", "U-2544", "U-2545", "U-2546", "U-2547", "U-2548", "U-2549", "U-2550", "U-2551", "U-2552", "U-2553", "U-2554", "U-2555", "U-2556", "U-2557", "U-2558", "U-2559", "U-2560", "U-2561", "U-2562", "U-2563", "U-2564", "U-2565", "U-2566", "U-2567", "U-2568", "U-2569", "U-2570", "U-2571", "U-2572", "U-2573", "U-2574", "U-2575", "U-2576", "U-2577", "U-2578", "U-2579", "U-2580", "U-2581", "U-2582", "U-2583", "U-2584", "U-2585", "U-2586", "U-2587", "U-2588", "U-2589", "U-2590", "U-2591", "U-2592", "U-2593", "U-2594", "U-2595", "U-2596", "U-2597", "U-2598", "U-2599", "U-2600", "U-2601", "U-2602", "U-2603", "U-2604", "U-2605", "U-2606", "U-2607", "U-2608", "U-2609", "U-2610", "U-2611", "U-2612", "U-2613", "U-2614", "U-2615", "U-2616", "U-2617", "U-2618", "U-2619", "U-2620", "U-2621", "U-2622", "U-2623", "U-2624"],
        "B-32": ["U-2625", "U-2626", "U-2627", "U-2628", "U-2629", "U-2630", "U-2631", "U-2632", "U-2633", "U-2634", "U-2635", "U-2636", "U-2637", "U-2638", "U-2639", "U-2640", "U-2641", "U-2642", "U-2643", "U-2644", "U-2645", "U-2646", "U-2647", "U-2648", "U-2649", "U-2650", "U-2651", "U-2652", "U-2653", "U-2654", "U-2655", "U-2656", "U-2657", "U-2658", "U-2659", "U-2660", "U-2661", "U-2662", "U-2663", "U-2664", "U-2665", "U-2666", "U-2667", "U-2668", "U-2669", "U-2670", "U-2671", "U-2672", "U-2673", "U-2674", "U-2675", "U-2676", "U-2677", "U-2678", "U-2679", "U-2680", "U-2681", "U-2682", "U-2683", "U-2684", "U-2685", "U-2686", "U-2687", "U-2688", "U-2689", "U-2690", "U-2691", "U-2692", "U-2693", "U-2694", "U-2695", "U-2696", "U-2697", "U-2698", "U-2699", "U-2700", "U-2701", "U-2702", "U-2703", "U-2704", "U-2705", "U-2706", "U-2707", "U-2708"],
        "B-33": ["U-2709", "U-2710", "U-2711", "U-2712", "U-2713", "U-2714", "U-2715", "U-2716", "U-2717", "U-2718", "U-2719", "U-2720", "U-2721", "U-2722", "U-2723", "U-2724", "U-2725", "U-2726", "U-2727", "U-2728", "U-2729", "U-2730", "U-2731", "U-2732", "U-2733", "U-2734", "U-2735", "U-2736", "U-2737", "U-2738", "U-2739", "U-2740", "U-2741", "U-2742", "U-2743", "U-2744", "U-2745", "U-2746", "U-2747", "U-2748", "U-2749", "U-2750", "U-2751", "U-2752", "U-2753", "U-2754", "U-2755", "U-2756", "U-2757", "U-2758", "U-2759", "U-2760", "U-2761", "U-2762", "U-2763", "U-2764", "U-2765", "U-2766", "U-2767", "U-2768", "U-2769", "U-2770", "U-2771", "U-2772", "U-2773", "U-2774", "U-2775", "U-2776", "U-2777", "U-2778", "U-2779", "U-2780", "U-2781", "U-2782", "U-2783", "U-2784", "U-2785", "U-2786", "U-2787", "U-2788", "U-2789", "U-2790", "U-2791", "U-2792"],
        "B-34": ["U-2793", "U-2794", "U-2795", "U-2796", "U-2797", "U-2798", "U-2799", "U-2800", "U-2801", "U-2802", "U-2803", "U-2804", "U-2805", "U-2806", "U-2807", "U-2808", "U-2809", "U-2810", "U-2811", "U-2812", "U-2813", "U-2814", "U-2815", "U-2816", "U-2817", "U-2818", "U-2819", "U-2820", "U-2821", "U-2822", "U-2823", "U-2824", "U-2825", "U-2826", "U-2827", "U-2828", "U-2829", "U-2830", "U-2831", "U-2832", "U-2833", "U-2834", "U-2835", "U-2836", "U-2837", "U-2838", "U-2839", "U-2840", "U-2841", "U-2842", "U-2843", "U-2844", "U-2845", "U-2846", "U-2847", "U-2848", "U-2849", "U-2850", "U-2851", "U-2852", "U-2853", "U-2854", "U-2855", "U-2856", "U-2857", "U-2858", "U-2859", "U-2860", "U-2861", "U-2862", "U-2863", "U-2864", "U-2865", "U-2866", "U-2867", "U-2868", "U-2869", "U-2870", "U-2871", "U-2872", "U-2873", "U-2874", "U-2875", "U-2876", "U-2877", "U-2878", "U-2879", "U-2880", "U-2881", "U-2882", "U-2883", "U-2884", "U-2885", "U-2886", "U-2887", "U-2888", "U-2889", "U-2890", "U-2891", "U-2892", "U-2893", "U-2894", "U-2895", "U-2896", "U-2897", "U-2898", "U-2899", "U-2900", "U-2901", "U-2902", "U-2903", "U-2904", "U-2905", "U-2906", "U-2907", "U-2908", "U-2909", "U-2910", "U-2911", "U-2912", "U-2913", "U-2914", "U-2915", "U-2916", "U-2917", "U-2918", "U-2919", "U-2920", "U-2921", "U-2922", "U-2923", "U-2924", "U-2925", "U-2926", "U-2927", "U-2928", "U-2929", "U-2930", "U-2931", "U-2932", "U-2933", "U-2934", "U-2935", "U-2936", "U-2937", "U-2938", "U-2939", "U-2940", "U-2941", "U-2942", "U-2943", "U-2944", "U-2945"]
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const selectQuadrant = document.getElementById('quadrant'),
        selectBlock = document.getElementById('block'),
        selectUnit = document.getElementById('unit'),
        selects = document.querySelectorAll('#newrecord-form select')
        



    selectBlock.disabled = true
    selectUnit.disabled = true

    selects.forEach(select => {
        if (select.disabled == true) {
            select.style.cursor = "auto"
        } else {
            select.style.cursor = "pointer"
        }
    })

    for (let quadrant in quadrantBlockUnitInfo) {
        selectQuadrant.options[selectQuadrant.options.length] = new Option(quadrant, quadrant)
    }

    // Quadrant change
    selectQuadrant.onchange = (e) => {
        selectBlock.disabled = false
        selectUnit.disabled = true

        selects.forEach(select => {
            if (select.disabled == true) {
                select.style.cursor = "auto"
            } else {
                select.style.cursor = "pointer"
            }
        })

        selectBlock.length = 1
        selectUnit.length = 1

        for (let block in quadrantBlockUnitInfo[e.target.value]) {
            selectBlock.options[selectBlock.options.length] = new Option(block, block)
        }
    }

    // Block change
    selectBlock.onchange = (e) => {
        selectUnit.disabled = false

        selects.forEach(select => {
            if (select.disabled == true) {
                select.style.cursor = "auto"
            } else {
                select.style.cursor = "pointer"
            }
        })

        selectUnit.length = 1

        let units = quadrantBlockUnitInfo[selectQuadrant.value][e.target.value]

        for (let i = 0; i < units.length; i++) {
            selectUnit.options[selectUnit.options.length] = new Option(units[i], units[i])
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const selectQuadrant = document.getElementById('edit-quadrant'),
        selectBlock = document.getElementById('edit-block'),
        selectUnit = document.getElementById('edit-unit'),
        selects = document.querySelectorAll('#editrecord-form select')

    // Disable block and unit selects initially
    selectBlock.disabled = true
    selectUnit.disabled = true

    // Enable/disable selects based on their state
    selects.forEach(select => {
        select.style.cursor = select.disabled ? "auto" : "pointer";
    });

    // Populate quadrants
    for (let quadrant in quadrantBlockUnitInfo) {
        selectQuadrant.options[selectQuadrant.options.length] = new Option(quadrant, quadrant)
    }

    // Quadrant change event
    selectQuadrant.onchange = (e) => {
        selectBlock.disabled = false
        selectUnit.disabled = true
        selects.forEach(select => {
            select.style.cursor = select.disabled ? "auto" : "pointer";
        });
        selectBlock.length = 1
        selectUnit.length = 1
        // Populate blocks based on selected quadrant
        for (let block in quadrantBlockUnitInfo[e.target.value]) {
            selectBlock.options[selectBlock.options.length] = new Option(block, block)
        }
    }

    // Block change event
    selectBlock.onchange = (e) => {
        selectUnit.disabled = false
        selects.forEach(select => {
            select.style.cursor = select.disabled ? "auto" : "pointer";
        });
        selectUnit.length = 1
        // Populate units based on selected quadrant and block
        let units = quadrantBlockUnitInfo[selectQuadrant.value][e.target.value]
        for (let i = 0; i < units.length; i++) {
            selectUnit.options[selectUnit.options.length] = new Option(units[i], units[i])
        }
    }
});
// ==================== SHOW PASSWORD
const showHiddenPassword = (inputPassword, inputIcon) => {
    const input = document.getElementById(inputPassword),
        iconEye = document.getElementById(inputIcon);



    iconEye.addEventListener('click', () => {
        // Change password to text
        if (input.type === 'password') {
            // Switch to text
            input.type = 'text';

            // Add icon
            iconEye.classList.add('ri-eye-line');

            // Remove icon
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            // Change to password
            input.type = 'password';

            // Remove icon
            iconEye.classList.remove('ri-eye-line');

            // Add icon
            iconEye.classList.add('ri-eye-off-line');
        }
    });
}

// Call the function to enable "Show Password" functionality
showHiddenPassword('edit-password', 'input-icon');

// ==================== SEARCH

function showSearchResults(htmlResponse) {
    document.getElementById('result').innerHTML = htmlResponse;
}






