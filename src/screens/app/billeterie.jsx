import { View } from "react-native";

import FindBusComponent from "../../components/findbus";
import BusCategories from "../../components/buscategory";
import CompanyImages from "../../components/company_maps";

const Billeterie = () => {
    return(
        <View>
            <CompanyImages/>
            <FindBusComponent/>
            <BusCategories/>
        </View>
    )
} 

export default Billeterie