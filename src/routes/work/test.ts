export async function get() {
	const notionToken = 'secret_DN6HnUpIm4yMYE2FmwyPK69uIrMACUThmFQumt4OtdE';

	const response = await fetch(
		'https://api.notion.com/v1/blocks/c6fcb7a13bd14b2293882c9195ea4437/children?page_size=10',
		{
			headers: {
				'Notion-Version': '2021-05-13',
				Authorization: `Bearer ${notionToken}`
			}
		}
	);
	const notion = await response.json();

	return {
		body: {
			notion
		}
	};
}
