'use client'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from "@mantine/core";
  
  export default function Login() {
    return (
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Login 
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
             Não tem uma conta ainda?{" "}
          <Anchor<"a">
            href="#"
            size="sm"
            onClick={(event) => event.preventDefault()}
          >
            Criar uma conta 
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="exemplo@email.com"
            required
            onChange={(e) => console.log(e.target)}
            />
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            required
            mt="md"
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Lembre-me" sx={{ lineHeight: 1 }} />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Esqueceu sua senha?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Entrar
          </Button>
        </Paper>
      </Container>
    );
  } 