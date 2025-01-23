import { projects } from '$lib/projects'

export function load({ params }) {
    const project = projects.find(p => p.id === String(params.id));
    if (!project) {
        return { status: 404, error: new Error('Project not found') };
    }
    return { project };
}