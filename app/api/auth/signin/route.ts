type IBody = {
  email: string;
  password: string;
}

export async function POST(
  request: Request
) {
  const getBody = async () => {
    const contentType = request.headers.get('Content-Type') || '';

    switch (contentType) {
      case 'application/json':
        return await request.json();
      case 'application/x-www-form-urlencoded':
        const formData = await request.formData();
        return Object.fromEntries(formData);
      default:
        throw new Error('Invalid content type');
    }
  }

  const body: IBody = await getBody()
  return Response.json(body)
}
