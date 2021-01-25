console.log(process.argv)

const command = process.argv[2];

if (command = "add") {
    console.log("adding a note");
} else {
    console.log("command not recognised");
}