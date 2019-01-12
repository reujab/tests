import * as React from "react"
import Answer from "../Answer"
import Checkbox from "../Checkbox"
import IMG from "../IMG"
import Radio from "../Radio"

export default [
	// Chapter 1
	<Radio
		question="Which of the following are all video ports?"
		answers={[
			<Answer correct>VGA, S-Video, DVI, HDMI, DisplayPort, Thunderbolt</Answer>,
			<Answer>VGA, S-Video, DVI, HDMI, DisplayPort, TRS</Answer>,
			<Answer>VGA, S-Video, DVI, HDMI, DisplayPort, BNC</Answer>,
		]}
		explanation={
			<span>
				<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SVGA_port.jpg/300px-SVGA_port.jpg">VGA</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/S-Video_7-pin_quasi-DIN_connector.JPG/170px-S-Video_7-pin_quasi-DIN_connector.JPG">S-Video</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/3/37/Dvi-cable.jpg">DVI</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Adapter_dvi_hdmi_S7302224_wp.jpg/220px-Adapter_dvi_hdmi_S7302224_wp.jpg">HDMI</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Displayport-cable.jpg">DisplayPort</IMG>, and <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thunderbolt_3_interface_USB-C_ports.jpg/220px-Thunderbolt_3_interface_USB-C_ports.jpg">ThunderBolt</IMG> are all video ports. <IMG src="https://cdn.head-fi.org/a/2446444.jpg">TRS</IMG> transmits audio, and <IMG src="https://upload.wikimedia.org/wikipedia/commons/b/b9/BNC_connector_50_ohm_male.jpg">BNC</IMG> is a connector used for coaxial cables.
			</span>
		}
	/>,

	<Radio
		question="Which USB port is fastest?"
		answers={[
			<Answer correct>Super-Speed</Answer>,
			<Answer>Hi-Speed</Answer>,
		]}
		explanation={
			<span>
				Hi-Speed is <IMG src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/82b2f2db-3a3f-4641-a4e9-ba1b8e20dddc.jpg._CB303372833_.jpg">USB 2.0</IMG>, and Super-Speed is <IMG src="https://sgcdn.startech.com/005329/media/products/gallery_large/USB31ACXM.C.jpg">USB 3.0</IMG>. USB 3.0 is faster than USB 2.0.
			</span>
		}
	/>,

	<Radio ordered
		question="What type of output does an S/PDIF port provide?"
		answers={[
			<Answer>power</Answer>,
			<Answer correct>audio</Answer>,
			<Answer>video</Answer>,
			<Answer>audio and video</Answer>,
		]}
		explanation={
			<span>
				An <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Digital_coaxial_audio_cable_%28orange%29.jpg/175px-Digital_coaxial_audio_cable_%28orange%29.jpg">S/PDIF</IMG> (Sony/Phillips Digital Interface) port provides high quality digital sound to an audio system, often a home theater.
			</span>
		}
	/>,

	<Radio
		question="What is the purpose of an expansion slot on a motherboard?"
		answers={[
			<Answer correct>It is used for an expansion card, which provides an extra port or other function that is not provided by the motherboard.</Answer>,
			<Answer>It allows a Mini-ITX or microATX motherboard to fit into an ATX chassis.</Answer>,
			<Answer>It increases the surface area of the motherboard, making it less likely to overheat.</Answer>,
		]}
		explanation={
			<span>
				<IMG src="https://www.gamingscan.com/wp-content/uploads/2018/01/atx-vs-micro-atx-vs-mini-atx-1.jpg">Mini-ITX and microATX fit into ATX</IMG> chassis because of standoffs. <IMG src="https://ischoolsclsbatungbakal.files.wordpress.com/2009/06/expansion-slot.jpg">Expansion slots</IMG> do not help with overheating.
			</span>
		}
	/>,

	<Radio ordered
		question="What should the setting for a dual-voltage selector switch be on a power supply when using the computer in the United States?"
		answers={[
			<Answer>3.3 volts</Answer>,
			<Answer>5 volts</Answer>,
			<Answer correct>115 volts</Answer>,
			<Answer>230 volts</Answer>,
		]}
		explanation="The 115 volts selection is used in the United States, and the 230 volts selection is used in Europe."
	/>,

	<Radio
		question="What technology standard is commonly used today for internal hard drives to interface with the motherboard in a system?"
		answers={[
			<Answer correct>SATA</Answer>,
			<Answer>IDE</Answer>,
			<Answer>USB</Answer>,
			<Answer>FireWire (IEEE 1394)</Answer>,
		]}
		explanation={
			<span>
				<IMG src="https://images-na.ssl-images-amazon.com/images/I/71qyPtLzX5L._SY355_.jpg">SATA</IMG> replaced <IMG src="https://images-na.ssl-images-amazon.com/images/I/41KqrBdXtZL._SL500_AC_SS350_.jpg">IDE</IMG> as the most common interface in 2007. <IMG src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/82b2f2db-3a3f-4641-a4e9-ba1b8e20dddc.jpg._CB303372833_.jpg">USB</IMG> and <IMG src="https://images-na.ssl-images-amazon.com/images/I/41xY1jGfoeL._SY355_.jpg">FireWire</IMG> are most commonly used by external hard drives.
			</span>
		}
	/>,

	<Radio ordered
		question="How many pins did the first P1 power connector to the motherboard have that was used with the original ATX?"
		answers={[
			<Answer>6 or 8</Answer>,
			<Answer>15</Answer>,
			<Answer correct>20</Answer>,
			<Answer>24</Answer>,
		]}
		explanation={
			<span>
				The original ATX used a <IMG src="https://classconnection.s3.amazonaws.com/539/flashcards/2245539/jpg/20-pin_p1-147E02B12666514A922-thumb400.jpg">20-pin power connector</IMG>. Later versions use <IMG src="http://www.playtool.com/pages/psuconnectors/main24index.jpg">24 pins</IMG>. <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SVGA_port.jpg/300px-SVGA_port.jpg">VGA</IMG> uses 15 pins to transmit video, and video cards often use <IMG src="https://c.76.my/Malaysia/6-pin-f-to-m-8-pin-pci-e-power-cable-pcie-gpu-graphics-card-lala55-1703-26-lala55@18.jpg">6- or 8-pin power connectors</IMG>.
			</span>
		}
	/>,

	<Radio
		question="What type of expansion slot requires extra power so that 4 more pins had to be added to the older 20-pin P1 power connector on the motherboard?"
		answers={[
			<Answer correct>PCIe (PCI Express)</Answer>,
			<Answer>CPU</Answer>,
			<Answer>eSATA</Answer>,
			<Answer>AGP</Answer>,
		]}
		explanation={null}
	/>,

	<Radio
		question="What device might require extra power so that it uses the 12V 6-pin power connector?"
		answers={[
			<Answer correct>video card</Answer>,
			<Answer>IDE hard drive</Answer>,
			<Answer>CPU</Answer>,
			<Answer>eSATA hard drive</Answer>,
		]}
		explanation={
			<span>
				Video cards often accept an additional <IMG src="https://c.76.my/Malaysia/6-pin-f-to-m-8-pin-pci-e-power-cable-pcie-gpu-graphics-card-lala55-1703-26-lala55@18.jpg">6- or 8-pin power connector</IMG> to power the GPU. <IMG src="https://www.disctech.com/SCASite/product_images/ST3250620A_1000-3.jpg">IDE hard drives</IMG> use <IMG src="https://upload.wikimedia.org/wikipedia/commons/3/31/Molex_female_connector.jpg">4-pin Molex connectors</IMG>. CPUs are powered by the motherboard and the <IMG src="http://www.remotelan.net/tutorials/power_supply/pictures/p4_atx.JPG">4-pin auxiliary connector</IMG>. <IMG src="https://upload.wikimedia.org/wikipedia/commons/7/76/Esatap_port.JPG">eSATAp</IMG> hard drives are powered by the motherboard.
			</span>
		}
	/>,

	<Radio
		question="What is the purpose of the 4-pin Molex connector?"
		answers={[
			<Answer correct>It powers older IDE drives.</Answer>,
			<Answer>It powers USB hubs.</Answer>,
			<Answer>It powers the CPU.</Answer>,
		]}
		explanation={
			<span>
				<IMG src="https://images-na.ssl-images-amazon.com/images/I/51wbmKjnHQL._SX425_.jpg">USB hubs</IMG> are powered by the motherboard. The CPU is powered by the motherboard and the <IMG src="http://www.remotelan.net/tutorials/power_supply/pictures/p4_atx.JPG">4-pin auxiliary connector</IMG>.
			</span>
		}
	/>,

	// <Radio
	// 	question="What type of bus is used by ExpressCard slots?"
	// 	answers={[
	// 		<Answer correct>PCIe</Answer>,
	// 		<Answer>SATA</Answer>,
	// 		<Answer>PATA</Answer>,
	// 		<Answer>USB</Answer>,
	// 		<Answer>ThunderBolt</Answer>,
	// 	]}
	// 	explanation={null}
	// />,

	// <Checkbox
	// 	question="Which of the following would you most likely find a SO-DIMM in?"
	// 	answers={[
	// 		<Answer correct>laptop</Answer>,
	// 		<Answer correct>all-in-one desktop</Answer>,
	// 		<Answer>smart phone</Answer>,
	// 		<Answer>printer</Answer>,
	// 		<Answer>desktop computer</Answer>,
	// 	]}
	// 	explanation={
	// 		<span>
	// 			<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Samsung-1GB-DDR2-Laptop-RAM.jpg/1200px-Samsung-1GB-DDR2-Laptop-RAM.jpg">SO-DIMM memory modules</IMG> are most likely to be found in laptops and compact all-in-one desktops.
	// 		</span>
	// 	}
	// />,
]
