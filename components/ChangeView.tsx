import {LatLng} from "leaflet";
import {useMap} from "react-leaflet";

export default function ChangeView({ center }: {center: location}) {
	const newCenter = new LatLng(center.latitude,  center.longitude)

	const map = useMap();
	map.setView(newCenter);
	return null;
}