import * as React from "react"
import Answer from "../Answer"
import Checkbox from "../Checkbox"
import IMG from "../IMG"
import Input from "../Input"
import Radio from "../Radio"

export default [
	// Chapter 1: Reviewing the Basics
	<Radio
		question="Which of the following are all video ports?"
		answers={[
			<Answer correct>VGA, S-Video, DVI, HDMI, DisplayPort, Thunderbolt</Answer>,
			<Answer>VGA, S-Video, DVI, HDMI, DisplayPort, TRS</Answer>,
			<Answer>VGA, S-Video, DVI, HDMI, DisplayPort, BNC</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SVGA_port.jpg/300px-SVGA_port.jpg">VGA</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/S-Video_7-pin_quasi-DIN_connector.JPG/170px-S-Video_7-pin_quasi-DIN_connector.JPG">S-Video</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/3/37/Dvi-cable.jpg">DVI</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Adapter_dvi_hdmi_S7302224_wp.jpg/220px-Adapter_dvi_hdmi_S7302224_wp.jpg">HDMI</IMG>, <IMG src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Displayport-cable.jpg">DisplayPort</IMG>, and <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thunderbolt_3_interface_USB-C_ports.jpg/220px-Thunderbolt_3_interface_USB-C_ports.jpg">Thunderbolt</IMG> are all video ports. <IMG src="https://cdn.head-fi.org/a/2446444.jpg">TRS</IMG> transmits audio, and <IMG src="https://upload.wikimedia.org/wikipedia/commons/b/b9/BNC_connector_50_ohm_male.jpg">BNC</IMG> is a connector used for coaxial cables.
			</React.Fragment>
		}
	/>,

	<Radio
		question="Which USB port is fastest?"
		answers={[
			<Answer correct>Super-Speed</Answer>,
			<Answer>Hi-Speed</Answer>,
		]}
		explanation={
			<React.Fragment>
				Hi-Speed is <IMG src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/82b2f2db-3a3f-4641-a4e9-ba1b8e20dddc.jpg._CB303372833_.jpg">USB 2.0</IMG>, and Super-Speed is <IMG src="https://sgcdn.startech.com/005329/media/products/gallery_large/USB31ACXM.C.jpg">USB 3.0</IMG>. USB 3.0 is faster than USB 2.0.
			</React.Fragment>
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
			<React.Fragment>
				An <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Digital_coaxial_audio_cable_%28orange%29.jpg/175px-Digital_coaxial_audio_cable_%28orange%29.jpg">S/PDIF</IMG> (Sony/Phillips Digital Interface) port provides high quality digital sound to an audio system, often a home theater.
			</React.Fragment>
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
			<React.Fragment>
				<IMG src="https://www.gamingscan.com/wp-content/uploads/2018/01/atx-vs-micro-atx-vs-mini-atx-1.jpg">Mini-ITX and microATX fit into ATX</IMG> chassis because of standoffs. <IMG src="https://ischoolsclsbatungbakal.files.wordpress.com/2009/06/expansion-slot.jpg">Expansion slots</IMG> do not help with overheating.
			</React.Fragment>
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
			<React.Fragment>
				<IMG src="https://images-na.ssl-images-amazon.com/images/I/71qyPtLzX5L._SY355_.jpg">SATA</IMG> replaced <IMG src="https://images-na.ssl-images-amazon.com/images/I/41KqrBdXtZL._SL500_AC_SS350_.jpg">IDE</IMG> as the most common interface in 2007. <IMG src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/82b2f2db-3a3f-4641-a4e9-ba1b8e20dddc.jpg._CB303372833_.jpg">USB</IMG> and <IMG src="https://images-na.ssl-images-amazon.com/images/I/41xY1jGfoeL._SY355_.jpg">FireWire</IMG> are most commonly used by external hard drives.
			</React.Fragment>
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
			<React.Fragment>
				The original ATX used a <IMG src="https://classconnection.s3.amazonaws.com/539/flashcards/2245539/jpg/20-pin_p1-147E02B12666514A922-thumb400.jpg">20-pin power connector</IMG>. Later versions use <IMG src="http://www.playtool.com/pages/psuconnectors/main24index.jpg">24 pins</IMG>. <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/SVGA_port.jpg/300px-SVGA_port.jpg">VGA</IMG> uses 15 pins to transmit video, and video cards often use <IMG src="https://c.76.my/Malaysia/6-pin-f-to-m-8-pin-pci-e-power-cable-pcie-gpu-graphics-card-lala55-1703-26-lala55@18.jpg">6- or 8-pin power connectors</IMG>.
			</React.Fragment>
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
			<React.Fragment>
				Video cards often accept an additional <IMG src="https://c.76.my/Malaysia/6-pin-f-to-m-8-pin-pci-e-power-cable-pcie-gpu-graphics-card-lala55-1703-26-lala55@18.jpg">6- or 8-pin power connector</IMG> to power the GPU. <IMG src="https://www.disctech.com/SCASite/product_images/ST3250620A_1000-3.jpg">IDE hard drives</IMG> use <IMG src="https://upload.wikimedia.org/wikipedia/commons/3/31/Molex_female_connector.jpg">4-pin Molex connectors</IMG>. CPUs are powered by the motherboard and the <IMG src="http://www.remotelan.net/tutorials/power_supply/pictures/p4_atx.JPG">4-pin auxiliary connector</IMG>. <IMG src="https://upload.wikimedia.org/wikipedia/commons/7/76/Esatap_port.JPG">eSATAp</IMG> hard drives are powered by the motherboard.
			</React.Fragment>
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
			<React.Fragment>
				<IMG src="https://images-na.ssl-images-amazon.com/images/I/51wbmKjnHQL._SX425_.jpg">USB hubs</IMG> are powered by the motherboard. The CPU is powered by the motherboard and the <IMG src="http://www.remotelan.net/tutorials/power_supply/pictures/p4_atx.JPG">4-pin auxiliary connector</IMG>.
			</React.Fragment>
		}
	/>,

	<Radio
		question="What type of bus is used by ExpressCard slots?"
		answers={[
			<Answer correct>PCIe</Answer>,
			<Answer>SATA</Answer>,
			<Answer>PATA</Answer>,
			<Answer>USB</Answer>,
			<Answer>Thunderbolt</Answer>,
		]}
	/>,

	<Checkbox
		question="Which of the following would you most likely find a SO-DIMM in?"
		answers={[
			<Answer correct>laptop</Answer>,
			<Answer correct>all-in-one desktop</Answer>,
			<Answer>smart phone</Answer>,
			<Answer>printer</Answer>,
			<Answer>desktop computer</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Samsung-1GB-DDR2-Laptop-RAM.jpg/1200px-Samsung-1GB-DDR2-Laptop-RAM.jpg">SO-DIMM memory modules</IMG> are most likely to be found in laptops and compact all-in-one desktops.
			</React.Fragment>
		}
	/>,

	<Radio
		question="What wireless technology is used when two smart phones within inches of one another exchange contact information?"
		answers={[
			<Answer correct>NFC</Answer>,
			<Answer>Bluetooth</Answer>,
			<Answer>802.11</Answer>,
			<Answer>Infared (IR)</Answer>,
		]}
		explanation="NFC (Near Field Communication) has a range of around two inches. Bluetooth has a range of around 100 meters. 802.11 is WiFi. Infared is not used to exchange contact information."
	/>,

	<Radio
		question="What is the purpose of a POST diagnostic card?"
		answers={[
			<Answer correct>It reports errors at boot.</Answer>,
			<Answer>It reports a failing hard drive.</Answer>,
			<Answer>It saves firmware configuration to its CMOS chip.</Answer>,
			<Answer>It troubleshoots network connections.</Answer>,
		]}
		explanation={
			<React.Fragment>
				A <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/BIOS_POST_card.jpg/1200px-BIOS_POST_card.jpg">POST card</IMG> reports errors that prevent the computer from successfully booting. S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) reports a failing hard drive.
			</React.Fragment>
		}
	/>,

	<Checkbox
		question="Which of the following purposes are accomplished by the motherboard firmware (BIOS/UEFI)?"
		answers={[
			<Answer correct>It manages essential devices.</Answer>,
			<Answer correct>It provides an interface to configure the motherboard.</Answer>,
			<Answer>It performs arithmetic.</Answer>,
		]}
		explanation="The BIOS manages essential devices, starts the computer, and is used to configure the motherboard. The CPU performs arithmetic."
	/>,

	<Checkbox
		question="You purchase a new desktop computer that does not have wireless capabilities, and then you decide that you want to use a wireless connection to the internet. What are the two least expensive ways to upgrade your system to wireless?"
		answers={[
			<Answer correct>Purchase a wireless expansion card and install it in your system.</Answer>,
			<Answer correct>Purchase a USB wireless adapter and connect it to the computer.</Answer>,
			<Answer>Trade in the computer for another computer that has wireless installed.</Answer>,
			<Answer>Purchase a second computer that has wireless capability.</Answer>,
		]}
	/>,

	<Radio
		question="What type of computer is likely to use SO-DIMMS, have an internal power supply, and use a desktop processor socket?"
		answers={[
			<Answer correct>all-in-one desktop</Answer>,
			<Answer>laptop</Answer>,
			<Answer>desktop</Answer>,
			<Answer>smart phone</Answer>,
		]}
		explanation={
			<React.Fragment>
				A laptop uses <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Samsung-1GB-DDR2-Laptop-RAM.jpg/1200px-Samsung-1GB-DDR2-Laptop-RAM.jpg">SO-DIMMs</IMG>, a battery, and a CPU, but it doesn't use a desktop processor socket. An <IMG src="https://images-na.ssl-images-amazon.com/images/I/61oJlZWp7RL._SX425_.jpg">all-in-one desktop</IMG> uses a desktop processor socket.
			</React.Fragment>
		}
	/>,

	<Radio
		question="While troubleshooting a computer, you suspect the network port on the computer is not functioning. Which tool would be most helpful?"
		answers={[
			<Answer correct>loopback plug</Answer>,
			<Answer>cable tester</Answer>,
			<Answer>multimeter</Answer>,
			<Answer>crimper</Answer>
		]}
		explanation={
			<React.Fragment>
				A <IMG src="https://showmecables-static.scdn3.secure.raxcdn.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/j/rj45-loopback-plug-1.jpg">loopback plug</IMG> will tell you if a port is malfunctioning. A <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cable-tester-and-analyzer-0c.jpg/1200px-Cable-tester-and-analyzer-0c.jpg">cable tester</IMG> tests cables. A <IMG src="https://images-na.ssl-images-amazon.com/images/I/71ZtiRvPd1L._SX425_.jpg">multimeter</IMG> measures electric current and voltage. A <IMG src="https://media.digikey.com/Photos/Mueller%20Photos/BU-CRIMPER.JPG">crimper</IMG> conjoins two wires.
			</React.Fragment>
		}
	/>,

	<Radio
		question="While troubleshooting your computer, the system fails at the beginning of the boot and nothing appears on your screen. Which tool would be most helpful?"
		answers={[
			<Answer correct>POST card</Answer>,
			<Answer>cable tester</Answer>,
			<Answer>recovery disk</Answer>,
			<Answer>hammer</Answer>,
		]}
		explanation={
			<React.Fragment>
				If the computer is failing to boot without displaying an error, a <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/BIOS_POST_card.jpg/1200px-BIOS_POST_card.jpg">POST card</IMG> would be most helpful. A recovery disk likely wouldn't help because the computer would be unable to boot to it.
			</React.Fragment>
		}
	/>,

	<Radio
		question="A hard drive is not working and you suspect the Molex power connector from the power supply might be the source of the problem. Which tool would be most helpful?"
		answers={[
			<Answer correct>multimeter</Answer>,
			<Answer>cable tester</Answer>,
			<Answer>crimper</Answer>,
		]}
		explanation={
			<React.Fragment>
				If you suspect a power issue, the most helpful tool would be a <IMG src="https://images-na.ssl-images-amazon.com/images/I/71ZtiRvPd1L._SX425_.jpg">multimeter</IMG>, a device that measures electric current and voltage. A cable tester would not be useful in troubleshooting a power issue.
			</React.Fragment>
		}
	/>,

	// Chapter 2
	<Radio
		question="What is the purpose of standoffs installed between the motherboard and the desktop case?"
		answers={[
			<Answer correct>They prevent shorts.</Answer>,
			<Answer>They prevent the motherboard from overheating.</Answer>,
			<Answer>They are an obsolete remnant of the original ATX specification.</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://images-na.ssl-images-amazon.com/images/I/61qvJd%2B7OwL._SX466_.jpg">Standoffs</IMG> prevent a short that could happen if the lines or circuits on the bottom of the motherboard touch the case while the system is running.
			</React.Fragment>
		}
	/>,

	<Radio
		question="When installing the front panel wires to the motherboard front panel header, how do you know which pins to use for each wire if the pins on the header are not labeled?"
		answers={[
			<Answer correct>You consult the motherboard documentation.</Answer>,
			<Answer>The locations are the same for every motherboard.</Answer>,
			<Answer>You memorize the locations for every motherboard manufacturer.</Answer>,
			<Answer>You match the colors of the wires with the colors of the pins.</Answer>,
		]}
		explanation={
			<React.Fragment>
				You always read the motherboard documentation (user guide). The <IMG src="https://i.ytimg.com/vi/b6q4h-lNHrU/maxresdefault.jpg">pins</IMG> are not always colored.
			</React.Fragment>
		}
	/>,

	<Radio ordered
		question="How many pins does the CPU auxiliary power connector on a motherboard have?"
		answers={[
			<Answer>2</Answer>,
			<Answer correct>4</Answer>,
			<Answer>6</Answer>,
			<Answer>8</Answer>,
		]}
		explanation={
			<React.Fragment>
				The <IMG src="https://c1.neweggimages.com/NeweggImage/ProductImage/12-423-184-01.jpg">CPU auxiliary power connector</IMG> has four pins.
			</React.Fragment>
		}
	/>,

	<Checkbox
		question="When a laptop internal device fails, which of the following options can you use to deal with the problem?"
		answers={[
			<Answer correct>Return the laptop to a service repair.</Answer>,
			<Answer correct>Substitute an external component for the internal component.</Answer>,
			<Answer correct>Replace the internal component.</Answer>,
		]}
	/>,

	<Radio
		question="After you have removed the AC adapter and all peripherals, what is the next component you should always remove before servicing any internal laptop components?"
		answers={[
			<Answer correct>battery</Answer>,
			<Answer>charger</Answer>,
			<Answer>keyboard</Answer>,
			<Answer>bezels</Answer>,
		]}
		explanation="All power must be disconnected before servicing internal components. A laptop charger is an AC adapter."
	/>,

	<Radio
		question="You disassemble and reassemble a desktop computer. When you first turn it on, you see no lights and hear no sounds. Nothing appears on the monitor screen. What is the most likely cause of the problem?"
		answers={[
			<Answer correct>Power cords are not connected to the motherboard.</Answer>,
			<Answer>A memory module is not seated peroperly in a memory slot.</Answer>,
			<Answer>You forgot to plug in the monitor's external power cord.</Answer>,
			<Answer>A wire in the case is obstructing the fan.</Answer>,
		]}
		explanation="If there are no lights or sounds, the motherboard is not powered. All other answers would still allow the computer to boot, even though it may fail."
	/>,

	<Radio
		question={<React.Fragment>A four-year-old laptop will not boot and presents error messages on the screen. You have verified with the laptop technical support that these error messages indicate the motherboard has failed and needs replacing. What is the <b>first</b> question you should ask yourself before performing the repair?</React.Fragment>}
		answers={[
			<Answer correct>Is the laptop still under warranty?</Answer>,
			<Answer>Will replacing the motherboard cost more than purchasing a new laptop?</Answer>,
			<Answer>Can I find a replacement motherboard?</Answer>,
			<Answer>Can I find the service manual to show me how to replace the motherboard?</Answer>,
		]}
		explanation="All of the answer choices are good questions to ask, but the question you should ask first is if there is still a warranty because if it still has a warranty, the manufacturer might fix it for you."
	/>,

	// Chapters 1 and 2: Test
	<Radio
		question="When handling motherboards, cards, or drives, which statement is accurate?"
		answers={[
			<Answer correct>You should hold expansion cards by the edges.</Answer>,
			<Answer>You should touch any soldered components on a card.</Answer>,
			<Answer>You should touch edge connectors.</Answer>,
			<Answer>You should touch chips on the device.</Answer>,
		]}
		explanation="Never touch soldered components, connectors, or chips."
	/>,

	// TODO: matching:
	// Bluetooth: a short-range wireless technology used to connect two devices in a small personal network
	// POST: a series of tests performed by the startup UEFI/BIOS when you first turn on a computer
	// PCIe: a slot used for expansion cards or video cards on a motherboard
	// microATX: reduces the total cost of a system by reducing the number of expansion slots on the motherboard, reducing the power supplied to the board, and allowing for a smaller case size
	// DisplayPort: transmits digital video and audio and is slowly replacing VGA and DVI
	// CPU: also called the processor, or microprocessor, does most of the processing of data and instructions for the entire system
	// DIMM: a type of memory slot found on a desktop motherboard
	// airplane mode: a computer is said to be in this mode when all wireless technologies are turned off
	// SO-DIMM: a smaller type of memory slot typically used for laptops
	// heat sink: draws heat from the CPU and pipes it to a fan, which then blows heat out of the case

	<Radio ordered
		question="Does a system always need the 4-pin auxiliary power connector?"
		answers={[
			<Answer>Yes.</Answer>,
			<Answer correct>No.</Answer>,
		]}
		explanation={
			<React.Fragment>
				Modern systems do not require the <IMG src="http://www.remotelan.net/tutorials/power_supply/pictures/p4_atx.JPG">4-pin auxiliary connector</IMG>.
			</React.Fragment>
		}
	/>,

	// TODO: matching:
	// ZIF connector: a type of connector that must be lifted up in order to be disconnected
	// service manual: a document from the manufacturer that describes how to disassemble a device
	// expansion slot: a connector on the motherboard that allows the insertion of a card
	// Power SW: controls power to the motherboard and must be connected to power the PC up
	// ESD strap: you clip it to the side of the computer case to dissipate any charge between you and the computer
	// Reset SW: switch used to reboot a computer
	// front panel header: a connector on a motherboard that consists of pins that stick up from the board
	// Power LED +/-: positive / negative LED that controls the power light and indicates the power is on
	// spacer: keeps the motherboard from touching the case
	// HDD LED: controls the drive activity light on the front panel that lights up when any SATA or IDE device is in use

	<Radio
		question="What are programs stored on the motherboard called?"
		answers={[
			<Answer correct>firmware</Answer>,
			<Answer>blob</Answer>,
			<Answer>instruction set</Answer>,
			<Answer>package</Answer>,
		]}
	/>,

	<Radio ordered
		question="Are you safe to begin working inside the case immediately after you unplug the computer from the power outlet?"
		answers={[
			<Answer>Yes.</Answer>,
			<Answer correct>No.</Answer>,
		]}
		explanation="You must hold the power button down after unplugging the computer."
	/>,

	<Radio
		question="What general-purpose tool can measure characteristics of electricity in a variety of devices?"
		answers={[
			<Answer correct>multimeter</Answer>,
			<Answer>POST card</Answer>,
			<Answer>loopback plug</Answer>,
			<Answer>cable tester</Answer>,
		]}
		explanation={
			<React.Fragment>
				A <IMG src="https://images-na.ssl-images-amazon.com/images/I/71ZtiRvPd1L._SX425_.jpg">multimeter</IMG> measures electric current and voltage. A <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/BIOS_POST_card.jpg/1200px-BIOS_POST_card.jpg">POST card</IMG> reports errors that prevent the computer from successfully booting. A <IMG src="https://showmecables-static.scdn3.secure.raxcdn.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/j/rj45-loopback-plug-1.jpg">loopback plug</IMG> will tell you if a port is malfunctioning. A <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cable-tester-and-analyzer-0c.jpg/1200px-Cable-tester-and-analyzer-0c.jpg">cable tester</IMG> tests cables.
			</React.Fragment>
		}
	/>,

	<Radio
		question="What audio port connects to an external home theater audio system, providing digital audio output?"
		answers={[
			<Answer correct>S/PDIF</Answer>,
			<Answer>FireWire</Answer>,
			<Answer>Thunderbolt</Answer>,
			<Answer>eSATA</Answer>,
		]}
		explanation={
			<React.Fragment>
				An <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Digital_coaxial_audio_cable_%28orange%29.jpg/175px-Digital_coaxial_audio_cable_%28orange%29.jpg">S/PDIF</IMG> (Sony/Phillips Digital Interface) port provides high quality digital sound to an audio system, often a home theater. <IMG src="https://images-na.ssl-images-amazon.com/images/I/41xY1jGfoeL._SY355_.jpg">FireWire</IMG> can transmit any data. <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thunderbolt_3_interface_USB-C_ports.jpg/220px-Thunderbolt_3_interface_USB-C_ports.jpg">Thunderbolt</IMG> combines PCIe and DisplayPort into two serial signals, and additionally provides DC power, all in one cable. <IMG src="https://upload.wikimedia.org/wikipedia/commons/7/76/Esatap_port.JPG">eSATA</IMG> (External SATA) allows SATA devices to be connected externally.
			</React.Fragment>
		}
	/>,

	<Radio
		question="What tool can help discover and report computer errors and conflicts that occur when you first turn on a computer and before the operating system is launched?"
		answers={[
			<Answer correct>POST card</Answer>,
			<Answer>BIOS memory</Answer>,
			<Answer>CMOS firmware</Answer>,
			<Answer>ROM module</Answer>,
		]}
		explanation={
			<React.Fragment>
				A <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/BIOS_POST_card.jpg/1200px-BIOS_POST_card.jpg">POST card</IMG> reports errors that prevent the computer from successfully booting.
			</React.Fragment>
		}
	/>,

	<Radio
		question="Which statement is a good practice when working inside a computer case?"
		answers={[
			<Answer correct>Touch the inside of a powered computer.</Answer>,
			<Answer>Don't hold expansion cards by the edge connectors.</Answer>,
			<Answer>Touch microchips with a magnetized screwdriver.</Answer>,
			<Answer>Don't remove loose jewelry.</Answer>,
		]}
		explanation="You should never touch the inside of a powered computer. You should never hold cards by the connectors. You should only touch screws with screwdrivers. Always remove loose jewelry before working inside a computer."
	/>,

	<Radio
		question="Which statement is not true regarding motherboards?"
		answers={[
			<Answer correct>They have a heat sink on the PCIe slots.</Answer>,
			<Answer>They have slots for DIMMs.</Answer>,
			<Answer>They have CPU sockets.</Answer>,
			<Answer>They are also called a system board.</Answer>,
		]}
		explanation="Motherboards do not have heat sinks."
	/>,

	<Radio
		question="Which power connector will a system always require?"
		answers={[
			<Answer correct>P1 power connector</Answer>,
			<Answer>6-pin PCIe power connector</Answer>,
			<Answer>4-pin auxiliary</Answer>,
			<Answer>8-pin PCIe power connector</Answer>,
		]}
		explanation={
			<React.Fragment>
				The <IMG src="http://fce-study.netdna-ssl.com/images/upload-flashcards/back/2/7/57472931_m.jpg">P1 power connector</IMG> powers the motherboard.
			</React.Fragment>
		}
	/>,

	<Radio
		question="When is it okay to touch the inside of a computer that is turned on?"
		answers={[
			<Answer correct>When using a multimeter to measure voltage output.</Answer>,
			<Answer>When reassembling the computer.</Answer>,
			<Answer>When disassembling the computer.</Answer>,
			<Answer>When a qualified electrician is present.</Answer>,
		]}
	/>,

	<Radio ordered
		question="Are functions that used to be provided by expansion cards are more often found as onboard ports today?"
		answers={[
			<Answer correct>Yes.</Answer>,
			<Answer>No.</Answer>,
		]}
	/>,

	<Radio
		question="What do you call a connector on a motherboard that consists of pins that stick up from the board?"
		answers={[
			<Answer correct>header</Answer>,
			<Answer>socket</Answer>,
			<Answer>jumper</Answer>,
			<Answer>pin array</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://i.ytimg.com/vi/b6q4h-lNHrU/maxresdefault.jpg">Headers</IMG> stick up from the motherboard. The <IMG src="https://img.purch.com/how-to-choose-motherboard-2014/w/600/aHR0cDovL21lZGlhLmJlc3RvZm1pY3JvLmNvbS9RL1kvNDQ4MDkwL29yaWdpbmFsL2xnYS0xMTUwLmpwZw==">socket</IMG> holds the CPU.
			</React.Fragment>
		}
	/>,

	<Radio ordered
		question="How many pins are in the power supply connector that is typically used on most motherboards today?"
		answers={[
			<Answer>8</Answer>,
			<Answer>15</Answer>,
			<Answer>20</Answer>,
			<Answer correct>24</Answer>,
		]}
		explanation="Older PSUs only supported 20-pin P1 connectors, but modern PSUs provide 24-pin P1 connectors."
	/>,

	<Radio
		question="What should be done after reassembling a laptop, but before installing the battery or AC adapter?"
		answers={[
			<Answer correct>Gently shake the laptop to ensure nothing is loose inside of the case.</Answer>,
			<Answer>Press the power button to drain any electricity in the system.</Answer>,
			<Answer>Remove the keyboard so that you can test proper voltage on the motherboard once the battery and/or AC adapter are reconnected.</Answer>,
			<Answer>Attach ESD strap alligator clip to a different grounding source</Answer>,
		]}
	/>,

	<Radio ordered
		question="Does an Ethernet port have a connector called an RJ-45 to connect to a network cable?"
		answers={[
			<Answer correct>Yes.</Answer>,
			<Answer>No.</Answer>,
		]}
	/>,

	<Radio ordered
		question="Do some boards designed to support multiple PCIe video cards have additional power connectors on the board to power wattage-hungry cards?"
		answers={[
			<Answer correct>Yes.</Answer>,
			<Answer>No.</Answer>,
		]}
		explanation={
			<React.Fragment>
				Some video cards require a <IMG src="https://c.76.my/Malaysia/6-pin-f-to-m-8-pin-pci-e-power-cable-pcie-gpu-graphics-card-lala55-1703-26-lala55@18.jpg">6- or 8-pin power connector</IMG>.
			</React.Fragment>
		}
	/>,

	<Radio
		question="What acronym is another name for static electricity, which can damage chips and destroy motherboards?"
		answers={[
			<Answer correct>ESD</Answer>,
			<Answer>EMI</Answer>,
			<Answer>LCD</Answer>,
			<Answer>CRT</Answer>,
		]}
		explanation={
			<React.Fragment>
				Always wear an <IMG src="https://images-na.ssl-images-amazon.com/images/I/81iimCtVyKL._SX425_.jpg">ESD (electrostatic discharge) wrist strap</IMG> to prevent damaging components.
			</React.Fragment>
		}
	/>,

	<Radio ordered
		question="Do hard drives have three connections for cables: one for reading data, one for writing data, and one for power?"
		answers={[
			<Answer>Yes.</Answer>,
			<Answer correct>No.</Answer>,
		]}
		explanation={
			<React.Fragment>
				Hard drives have two cables: one for reading <b>and</b> writing data (SATA) and one for power.
			</React.Fragment>
		}
	/>,

	// TODO: finish

	// Chapter 3: Reviewing the Basics
	<Checkbox
		question="Which of the following are form factors for motherboards?"
		answers={[
			<Answer correct>ATX</Answer>,
			<Answer correct>microATX</Answer>,
			<Answer correct>Mini-ITX</Answer>,
			<Answer>Mini-ATX</Answer>,
			<Answer>microITX</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://www.gamingscan.com/wp-content/uploads/2018/01/atx-vs-micro-atx-vs-mini-atx-1.jpg">ATX, microATX, and Mini-ITX</IMG> are the three most popular form factors. The Mini-ITX and microITX form factors do not exist.
			</React.Fragment>
		}
	/>,

	<Radio
		question="Which CPU manufacturer created the LGA1155 socket?"
		answers={[
			<Answer correct>Intel</Answer>,
			<Answer>AMD</Answer>,
			<Answer>IBM</Answer>,
			<Answer>HP</Answer>,
		]}
		explanation="Intel created the LGA sockets."
	/>,

	<Radio
		question="Which part of a Nehalem chipset connects directly to the processor?"
		answers={[
			<Answer correct>Northbridge</Answer>,
			<Answer>Southbridge</Answer>,
		]}
		explanation={
			<React.Fragment>
				The <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chipset_schematic.svg/300px-Chipset_schematic.svg.png">Northbridge</IMG> communicates with fast processes, such as the CPU, the RAM, and the GPU. The Southbridge communicates with all I/O functions, such as USB.
			</React.Fragment>
		}
	/>,

	<Radio ordered
		question="How much faster is PCIe 3.0 than PCIe 2.0?"
		answers={[
			<Answer correct>2x</Answer>,
			<Answer>3x</Answer>,
			<Answer>4x</Answer>,
		]}
		explanation="PCIe 3.0 doubles the speed of PCIe 2.0."
	/>,

	<Radio
		question="If you are installing an expansion card into a case that does not have enough clearance above the motherboard for the card, what device can you use to solve the problem?"
		answers={[
			<Answer correct>riser card</Answer>,
			<Answer>Ryzen card</Answer>,
			<Answer>razor card</Answer>,
			<Answer>raiser card</Answer>,
			<Answer>rider card</Answer>,
		]}
		explanation={
			<React.Fragment>
				A <IMG src="https://www.bhphotovideo.com/images/images1500x1500/istarusa_dd_666_1u_pcie_x16_to_1322300.jpg">riser card</IMG> allows you to insert expansion cards at a 90° angle. Ryzen is a series of AMD processors.
			</React.Fragment>
		}
	/>,

	<Radio
		question="Which chip on a motherboard does Windows BitLocker Encryption use to secure the hard drive?"
		answers={[
			<Answer correct>TPM</Answer>,
			<Answer>BIOS</Answer>,
			<Answer>Northbridge</Answer>,
			<Answer>Southbridge</Answer>,
		]}
		explanation={
			<React.Fragment>
				The <IMG src="https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTYvMDYvNTF5MXY3MXFyd2wuanBn">TPM (trusted platform module) chip</IMG> stores encryption keys used to secure the hard drive.
			</React.Fragment>
		}
	/>,

	<Checkbox
		question="In which of the following scenarios should you flash (update) your firmware (BIOS/UEFI)?"
		answers={[
			<Answer correct>You need new features that are not available on your current firmware version.</Answer>,
			<Answer correct>You are experiencing issues and suspect that it's a firmware issue.</Answer>,
			<Answer>There is a new version available on the manufacturer's website.</Answer>,
			<Answer>Your firmware chip failed.</Answer>,
		]}
		explanation="You should only update your firmware if you have to because your computer could fail to boot after. If your firmware chip fails, you must replace your motherboard."
	/>,

	<Checkbox ordered
		question="Which of the following versions of Windows support secure boot?"
		answers={[
			<Answer>Windows XP</Answer>,
			<Answer>Windows 7</Answer>,
			<Answer correct>Windows 8</Answer>,
			<Answer correct>Windows 10</Answer>,
		]}
		explanation="Windows 8 and later versions support secure boot."
	/>,

	<Radio
		question="Which partitioning scheme must be used to utilize more than 2 TiB of storage and up to 128 primary partitions?"
		answers={[
			<Answer correct>GPT</Answer>,
			<Answer>MBR</Answer>,
			<Answer>SGI</Answer>,
			<Answer>Sun</Answer>,
		]}
		explanation="MBR supports only up to 2 TiB and four primary partitions. SGI and Sun are rarely used."
	/>,

	<Radio
		question="When you turn off the power to a computer and unplug it at night, it loses the date, and you just reenter it each morning. What is the problem?"
		answers={[
			<Answer correct>The CMOS battery is dead.</Answer>,
			<Answer>The motherboard is failing.</Answer>,
			<Answer>The RAM is losing power when the system is powered off.</Answer>,
			<Answer>The failing CPU is resetting the date on every boot.</Answer>,
		]}
		explanation={
			<React.Fragment>
				The <IMG src="https://www.cpureport.com/wp-content/uploads/2014/12/CMOS-battery1.jpg">CMOS battery</IMG> powers the CMOS, which stores the date when the computer is powered off. If there is no power to the computer and the CMOS battery is dead, the date and time will be lost. Memory (RAM) is lost after the machine is powered off, but that is not the underlying issue.
			</React.Fragment>
		}
	/>,

	<Radio
		question="When troubleshooting a desktop motherboard, you discover the network port no longer works. What is the best solution to this problem to try first?"
		answers={[
			<Answer correct>Update the drivers.</Answer>,
			<Answer>Replace the motherboard.</Answer>,
			<Answer>Disable the onboard port and install a network card in an expansion slot.</Answer>,
			<Answer>Use a wireless network device in a USB port to connect to a wireless network.</Answer>,
			<Answer>Return the motherboard to the factory for repair.</Answer>,
		]}
		explanation="The only free and easiest solution is updating the drivers. If this doesn't work, the next best solution would be using a network card."
	/>,

	// Chapter 4: Reviewing the Basics
	<Checkbox
		question="Who are the two major manufacturers of processors?"
		answers={[
			<Answer correct>Intel</Answer>,
			<Answer correct>AMD</Answer>,
			<Answer>IBM</Answer>,
			<Answer>HP</Answer>,
			<Answer>Sun</Answer>,
		]}
	/>,

	<Radio ordered
		question="What is the name of the memory cache that is on the same die as the processor?"
		answers={[
			<Answer correct>L1</Answer>,
			<Answer>L2</Answer>,
			<Answer>L3</Answer>,
			<Answer>L4</Answer>,
		]}
		explanation="The lower the cache level, the closest it is to the processor."
	/>,

	<Radio ordered
		question="What is the name of the memory cache that is closest to the processor die but is not housed on the die?"
		answers={[
			<Answer>L1</Answer>,
			<Answer correct>L2</Answer>,
			<Answer>L3</Answer>,
			<Answer>L4</Answer>,
		]}
		explanation="The L1 cache is on the same die as the processor."
	/>,

	<Radio
		question="What is the name of the Intel technology that allows a processor to handle two threads at the same time?"
		answers={[
			<Answer correct>Hyper-Threading</Answer>,
			<Answer>multithreading</Answer>,
			<Answer>SMT</Answer>,
			<Answer>Execute Disable Bit</Answer>,
		]}
		explanation="Multithreading is the generic term for Intel's Hyper-Threading. SMT stands for simultaneous multithreading. Execute Disable Bit is an Intel technology that helps prevent buffer overflow malware attacks."
	/>,

	<Input
		question="How many threads can a quad-core processor handle at once?"
		answer={8}
		explanation="Each core can process two threads simultaneously, so a quad-core processor can handle eight threads."
	/>,

	<Radio
		question="What is the purpose of the Execute Disable Bit?"
		answers={[
			<Answer correct>It helps prevent malware attacks.</Answer>,
			<Answer>It speeds up the CPU.</Answer>,
			<Answer>It speeds up the hard drive.</Answer>,
		]}
		explanation="EDB is a security measure built into the processor. It works with the operating system to designate non-executable memory in order to prevent malware from executing."
	/>,

	<Radio
		question="Which is faster?"
		answers={[
			<Answer correct>SRAM</Answer>,
			<Answer>DRAM</Answer>,
		]}
		explanation="SRAM is faster because it does not need to be refreshed."
	/>,

	<Input
		question="How many pins are on a DDR DIMM?"
		answer={184}
		explanation={
			<React.Fragment>
				A <IMG src="https://www.alternate.co.uk/p/o/i/Apacer_DIMM_512_MB_DDR_400__RAM@@i9ida0.jpg">DDR DIMM</IMG> 184 pins.
			</React.Fragment>
		}
	/>,

	<Input
		question="How many pins are on a DDR2 DIMM?"
		answer={240}
		explanation={
			<React.Fragment>
				A <IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Swissbit_2GB_PC2-5300U-555.jpg/300px-Swissbit_2GB_PC2-5300U-555.jpg">DDR2 DIMM</IMG> has 240 pins.
			</React.Fragment>
		}
	/>,

	<Input
		question="How many pins are on a DDR3 DIMM?"
		answer={240}
		explanation={
			<React.Fragment>
				A <IMG src="https://www.goodram.com/wp-content/uploads/dram-ddr3-dimm-bok.jpg">DDR3 DIMM</IMG> has 240 pins.
			</React.Fragment>
		}
	/>,

	<Input
		question="How many pins are on a DDR4 DIMM?"
		answer={288}
		explanation={
			<React.Fragment>
				A <IMG src="https://www.goodram.com/wp-content/uploads/dram-ddr4-dimm-1.jpg">DDR4 DIMM</IMG> has 288 pins.
			</React.Fragment>
		}
	/>,

	<Radio ordered
		question="Which of the following RAM is fastest?"
		answers={[
			<Answer correct>CL3</Answer>,
			<Answer>CL4</Answer>,
			<Answer>CL5</Answer>,
			<Answer>CL6</Answer>,
		]}
		explanation="CL stands for column access strobe latency, which is the time in milliseconds it takes to access a column of memory. The lower the number, the faster the RAM."
	/>,

	<Radio ordered
		question="Which of the following DIMMs uses the least voltage?"
		answers={[
			<Answer>DDR</Answer>,
			<Answer>DDR2</Answer>,
			<Answer>DDR3</Answer>,
			<Answer correct>DDR4</Answer>,
		]}
		explanation="DDR uses 2.5 V, DDR2 uses 1.8 V, DDR3 uses 1.5 V, and DDR4 uses 1.2 V."
	/>,

	<Checkbox
		question="Which of the following devices are most likely to use ECC memory?"
		answers={[
			<Answer correct>server</Answer>,
			<Answer>laptop</Answer>,
			<Answer>desktop</Answer>,
			<Answer>smart phone</Answer>,
			<Answer>printer</Answer>,
		]}
		explanation="ECC (error-correcting code) memory can automatically correct one bit in a failing RAM stick. Because ECC memory costs more and doesn't provide much of a benefit, most computer users don't use ECC memory. A server would most benefit from ECC memory."
	/>,

	<Radio
		question="You have just upgraded memory on a computer from 1 GB to 2 GB by adding one DIMM. When you first turn on the PC, the memory count shows only 1 GB. Which of the following is most likely the source of the problem?"
		answers={[
			<Answer correct>The new DIMM is not properly seated.</Answer>,
			<Answer>Windows is giving an error because it likely became corrupted while the computer was disassembled.</Answer>,
			<Answer>The new DIMM you installed is faulty.</Answer>,
			<Answer>The DIMM is installed in the wrong slot.</Answer>,
		]}
		explanation="If you just installed a DIMM, and it is not recognized, it likely is not seated properly. It is less likely that a new DIMM is faulty."
	/>,

	// Chapter 5: Reviewing the Basics
	<Checkbox
		question="What are the two major components of a processor cooling assembly?"
		answers={[
			<Answer correct>heat sink</Answer>,
			<Answer correct>fan</Answer>,
			<Answer>water</Answer>,
			<Answer>heat spreader</Answer>,
		]}
		explanation={
			<React.Fragment>
				A <IMG src="https://5.imimg.com/data5/RF/DE/MY-40049777/computer-heat-sink-500x500.jpg">heat sink</IMG> and <IMG src="https://images-na.ssl-images-amazon.com/images/I/41Psb%2BDytOL._SX425_.jpg">fan</IMG> is the most common method of cooling CPUs. Water would only be used with liquid cooling, a less common method.
			</React.Fragment>
		}
	/>,

	<Checkbox
		question="Which two components in a system might give out a loud whining noise?"
		answers={[
			<Answer correct>PSU</Answer>,
			<Answer correct>hard drive</Answer>,
			<Answer>fan</Answer>,
			<Answer>video card</Answer>,
		]}
	/>,

	<Radio ordered
		question="What is a reasonable wattage capacity for a power supply to be used wit ha system that contains a DVD drive, three hard drives, and a high-end-video card?"
		answers={[
			<Answer>150 Watts</Answer>,
			<Answer>250 Watts</Answer>,
			<Answer correct>700 Watts</Answer>,
			<Answer>1000 Watts</Answer>,
		]}
	/>,

	<Radio
		question="When you boot up a computer and hear a single beep, but the screen is blank, what can you assume is the source of the problem?"
		answers={[
			<Answer correct>monitor</Answer>,
			<Answer>memory</Answer>,
			<Answer>CPU</Answer>,
			<Answer>keyboard</Answer>,
		]}
		explanation="POST sounds either no beep or one beep when there is no boot error, so if POST sounds one beep with no display, the issue is with the monitor."
	/>,

	<Checkbox
		question="Which of the following are physical drives?"
		answers={[
			<Answer correct>magnetic drive</Answer>,
			<Answer correct>solid-state drive</Answer>,
			<Answer correct>hybrid drive</Answer>,
			<Answer>dynamic drive</Answer>,
			<Answer>static drive</Answer>,
		]}
		explanation={
			<React.Fragment>
				<IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Laptop-hard-drive-exposed.jpg/220px-Laptop-hard-drive-exposed.jpg">Magnetic drives</IMG> have moving parts, are cheaper, and slower. <IMG src="https://ae01.alicdn.com/kf/HTB17ycxbDTI8KJjSsphq6AFppXaS/Goldenfir-SATA-III-240GB-SSD-2-5-solid-state-drive-disk-240gb-ssd-hard-drive-for.jpg_640x640.jpg">SSDs</IMG> have no moving parts, are significantly faster, and cost more. <IMG src="https://images-na.ssl-images-amazon.com/images/I/5131YWCyDzL._SX425_.jpg">Hybrid drives</IMG> combine the technologies of SSDs and HDDs.
			</React.Fragment>
		}
	/>,

	<Input
		question="What is the transfer speed of SATA I in Gbps?"
		answer={1.5}
		explanation="SATA I has a transfer speed of 1.5 Gbps."
	/>,

	<Input
		question="What is the transfer speed of SATA II in Gbps?"
		answer={3}
		explanation="SATA I has a transfer speed of 3 Gbps."
	/>,

	<Input
		question="What is the transfer speed of SATA III in Gbps?"
		answer={16}
		explanation="SATA I has a transfer speed of 16 Gbps."
	/>,

	<Checkbox ordered
		question="Which of the following RAID arrays improve performance?"
		answers={[
			<Answer correct>RAID 0</Answer>,
			<Answer>RAID 1</Answer>,
			<Answer correct>RAID 5</Answer>,
			<Answer correct>RAID 6</Answer>,
			<Answer correct>RAID 10</Answer>,
		]}
		explanation="RAID 0 is striping, RAID 1 is mirroring, RAID 5 is striping and parity, RAID 6 is striping and dual parity, and RAID 10 is striping and mirroring."
	/>,

	<Checkbox ordered
		question="Which of the following RAID arrays provide fault tolerance?"
		answers={[
			<Answer>RAID 0</Answer>,
			<Answer correct>RAID 1</Answer>,
			<Answer correct>RAID 5</Answer>,
			<Answer correct>RAID 6</Answer>,
			<Answer correct>RAID 10</Answer>,
		]}
		explanation="RAID 0 is striping, RAID 1 is mirroring, RAID 5 is striping and parity, RAID 6 is striping and dual parity, and RAID 10 is striping and mirroring."
	/>,

	<Checkbox ordered
		question="Which of the following RAID arrays require at least four disks?"
		answers={[
			<Answer>RAID 0</Answer>,
			<Answer>RAID 1</Answer>,
			<Answer>RAID 5</Answer>,
			<Answer correct>RAID 6</Answer>,
			<Answer correct>RAID 10</Answer>,
		]}
		explanation="RAID 0 requires at least two disks, RAID 1 requires at least two disks, RAID 5 requires at least three disks, RAID 6 requires at least four disks, and RAID 10 requires at least four disks."
	/>,

	<Radio
		question="Which file system is used by Blu-ray discs?"
		answers={[
			<Answer correct>UDF</Answer>,
			<Answer>CDfs</Answer>,
			<Answer>NTFS</Answer>,
			<Answer>ISO</Answer>,
			<Answer>exFAT</Answer>,
		]}
		explanation="UDF (Universal Disk Format) is used by Blu-ray, DVDs, and CDs. CDfs is a virtual file system for Unix-like operating systems. NTFS is used by Windows."
	/>,

	<Radio
		question="Which Windows command do you use to test for bad sectors?"
		answers={[
			<Answer correct>chkdsk</Answer>,
			<Answer>fsck</Answer>,
			<Answer>fstab</Answer>,
			<Answer>chkfs</Answer>,
		]}
		explanation={
			<React.Fragment>
				<code>chkdsk</code> is used on Windows, and <code>fsck</code> is used on Linux.
			</React.Fragment>
		}
	/>,

	<Radio
		question="You want to install an SSD drive in your desktop computer, but the drive is far too narrow to fit snugly into the bays of your computer case. Which of the following do you do?"
		answers={[
			<Answer correct>Buy a bay adapter that will allow you to install the narrow drive in a desktop case bay.</Answer>,
			<Answer>This SSD is designed for a laptop. Flash BIOS/UEFI so that your system will support a laptop hard drive.</Answer>,
			<Answer>Use a special SATA controller card that will support the narrow drive.</Answer>,
		]}
	/>,

	// Chapter 7: Reviewing the Basics
	<Checkbox
		question="Which of the following are functions of an operating system?"
		answers={[
			<Answer correct>It runs applications.</Answer>,
			<Answer correct>It provides an interface for users.</Answer>,
			<Answer correct>It stores and manipulates files.</Answer>,
			<Answer>It assigns IRQ channels, DMAs, and I/O addresses.</Answer>,
			<Answer>It performs a POST test.</Answer>,
		]}
		explanation="An operating system runs applications, provides an interfadce for users, and manages files. Your firmware assigns an IRQ channel, DMA, and I/O addresses and performs a POST test."
	/>,

	<Checkbox
		question="Which of the following file extensions indicate the file is compressed?"
		answers={[
			<Answer correct>.zip</Answer>,
			<Answer correct>.rar</Answer>,
			<Answer correct>.7z</Answer>,
			<Answer correct>.gz</Answer>,
			<Answer correct>.cab</Answer>,
			<Answer>.tar</Answer>,
			<Answer>.iso</Answer>,
		]}
		explanation="ZIP, RAR, 7z, gunzipped, and cabinet files are all compressed archives. Tarballs are like uncompressed ZIP files. Tarballs are often compressed using gunzip, producing a .tar.gz extension. ISO contain uncompressed files that go on a disc."
	/>,

	<Radio
		question="Which file system does Windows primarily use?"
		answers={[
			<Answer correct>NTFS</Answer>,
			<Answer>HFS</Answer>,
			<Answer>HFS+</Answer>,
			<Answer>ext4</Answer>,
			<Answer>btrfs</Answer>,
		]}
		explanation="Windows primarily uses NTFS. macOS primarily uses HFS+. Linux primarily uses ext4 and occasionally btrfs."
	/>,

	// Chapter 9
	<Input
		question="What is the speed in Mbps of a Hi-Speed USB port?"
		answer={480}
		explanation="Hi-Speed USB ports operate at 480 Mbps."
	/>,

	<Checkbox
		question="Which of the following wireless protocols require a line-of-sight clearance?"
		answers={[
			<Answer correct>satellite</Answer>,
			<Answer correct>infared</Answer>,
			<Answer>802.11</Answer>,
			<Answer>Bluetooth</Answer>,
			<Answer>NFC</Answer>,
		]}
		explanation="There can be no obstruction between satellites or between an infared transmitter and receiver."
	/>,

	// Custom
	<Input
		question="A system administrator needs remote access to a Linux server. What port must be open?"
		answer={22}
		explanation="SSH (port 22) adds the capability for remote access to a Linux machine. RDP (port 3389) is only used by Windows."
	/>,
]
