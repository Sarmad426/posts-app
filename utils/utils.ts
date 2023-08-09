"use server";
import prisma from "@/db";


async function addPost(title: string, content: string) {
    await prisma.posts.create({ data: { title, content } })
}

async function handleLike(id: string) {
    await prisma.posts.update({ where: { id }, data: { liked: true, hated: false } })
}
async function handleNoLike(id: string) {
    await prisma.posts.update({ where: { id }, data: { liked: false, hated: false } })
}
async function handleDisLike(id: string) {
    await prisma.posts.update({ where: { id }, data: { liked: false, hated: true } })
}
async function handleNoHate(id: string) {
    await prisma.posts.update({ where: { id }, data: { liked: false, hated: false } })
}

async function editPost(id: string, title: string, content: string) {
    await prisma.posts.update({ where: { id }, data: { title, content } })
}

async function deletePost(id: string) {
    await prisma.posts.delete({ where: { id } })
}

export { addPost, handleLike, handleNoLike, handleDisLike, handleNoHate, editPost, deletePost }