
    let days = prompt("type here your day name........... ") 
switch (days) {
    case "MONDAY":
    case "Mn":
    case "mn":
    case "mon":
        document.write(" Monday is a working day!")
        break;
    case "TUESDAY":
    case "t":
    case "T":
    case "Tue":
        document.write(" Tuesday is a working day!")
        break;
        case "wednasday":
            case "wed":
            case "W":
            case "we":
                document.write(" it`s working day!")
                break;
                case "thersday":
            case "th":
            case "TH":
           
            document.write(" Its working day!")
                break;
                case "friday":
            case "fr":
            case "Fr":
            case "Fri":
            case "FRI":
           
            document.write(" A friday is a working day!")
                break;
                case "saturday":
                    case "st":
                    case "ST":
                    case "SUT":
                    case "su":
                    case "SU":
                   
                       document.write(" Saturday is a Holi day!.........")
                        break;
                        case "sunday":
                            case "sun":
                            case "SUN":
                            case "S":
                            case "s":
                            
                           
                                document.write(" Sunday is a Holi day!.........")
                                break;
    default:
        alert("Invalid days!");
        break;
}


document.write  ( days)

