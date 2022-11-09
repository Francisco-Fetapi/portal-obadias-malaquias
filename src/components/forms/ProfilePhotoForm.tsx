import {
  TextInput,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Box,
  Center,
  Stack,
} from "@mantine/core";

import Link from "next/link";
import FormHeader from "../FormHeader";
import SelectPhotoArea from "../SelectPhotoArea";

export function ProfilePhotoForm() {
  return (
    <Stack my={50}>
      <FormHeader title="Foto de Perfil">
        Defina uma foto de perfil.{" "}
        <Link href="/" replace>
          <Anchor<"a"> size="sm">Ignorar por agora</Anchor>
        </Link>
      </FormHeader>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack style={{ flexDirection: "column" }}>
          <SelectPhotoArea />
        </Stack>
      </Paper>
    </Stack>
  );
}
