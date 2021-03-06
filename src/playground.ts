import dedent from "dedent";
import { writeFileSync } from "fs";
import { convert } from "./convert";

// const input = dedent\`{a!ae;--description="{perget;name}"}\`;
const input = dedent`
	{channel.send;
		{/ae;
		--color="#a3d5ae";
		--title="{$legacy_args}";
		--footer="{user.tag}";
		--footer-icon="{user.avatarURL}";
		--timestamp};{$NewsChannel}}
`;
const result = convert(input);
console.log({ input, result });
writeFileSync("output.txt", result.output);
